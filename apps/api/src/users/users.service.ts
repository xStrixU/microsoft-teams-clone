import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import emailValidator from 'email-validator';

import { AppConfigService } from '@/app.config';
import { PrismaService } from '@/database/prisma/prisma.service';
import { PrismaErrorCode } from '@/database/prisma/prisma.types';
import { isPrismaError } from '@/database/prisma/prisma.utils';

import type { CreateUserDto } from './dto/create-user.dto';
import type { GetUsersQueryDto } from './dto/get-users-query.dto';
import type { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
	constructor(
		@Inject(ConfigService) private readonly configService: AppConfigService,
		private readonly prisma: PrismaService
	) {}

	async create({ fullName, email, password }: CreateUserDto): Promise<User> {
		const hashedPassword = await this.hashPassword(password);

		try {
			const user = await this.prisma.user.create({
				data: {
					fullName,
					email,
					password: hashedPassword,
				},
			});

			return user;
		} catch (err) {
			if (isPrismaError(err) && err.code === PrismaErrorCode.UniqueKeyViolation) {
				throw new ConflictException('Email is already registered');
			}

			throw err;
		}
	}

	async getUsers({ search }: GetUsersQueryDto, { id }: User): Promise<User[]> {
		if (emailValidator.validate(search)) {
			const users = await this.prisma.user.findMany({
				where: {
					email: {
						search,
					},
					NOT: { id },
				},
			});

			return users;
		}

		const names = search.toLowerCase().split(' ').filter(Boolean);
		const users = await this.prisma.user.findMany({
			where: {
				fullName: {
					search: names.join(' | '),
				},
				NOT: { id },
			},
		});

		return users.filter(user => {
			const userNames = user.fullName.toLowerCase().split(' ');

			return names.every(name => userNames.includes(name));
		});
	}

	hashPassword(password: string): Promise<string> {
		const saltOrRounds = this.configService.get('PASSWORD_SALT_OR_ROUNDS', { infer: true });

		return bcrypt.hash(password, saltOrRounds);
	}

	findBy(where: Prisma.UserWhereInput): Promise<User | null> {
		return this.prisma.user.findFirst({
			where,
		});
	}
}
