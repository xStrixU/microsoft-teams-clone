import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

import { AppConfigService } from '@/app.types';
import { PrismaService } from '@/database/prisma/prisma.service';
import { PrismaErrorCode } from '@/database/prisma/prisma.types';
import { isPrismaError } from '@/database/prisma/prisma.utils';

import type { CreateUserDto } from './dto/create-user.dto';
import type { Prisma, User } from '@prisma/client';

import type { AppI18nContext } from '@/common/i18n/i18n.types';

@Injectable()
export class UsersService {
	constructor(
		@Inject(ConfigService) private readonly configService: AppConfigService,
		private readonly prisma: PrismaService
	) {}

	async create(
		{ firstName, lastName, email, password }: CreateUserDto,
		i18n: AppI18nContext
	): Promise<User> {
		const hashedPassword = await this.hashPassword(password);

		try {
			const user = await this.prisma.user.create({
				data: {
					firstName,
					lastName,
					email,
					password: hashedPassword,
				},
			});

			return user;
		} catch (err) {
			if (isPrismaError(err) && err.code === PrismaErrorCode.UniqueKeyViolation) {
				throw new ConflictException(i18n.t('exceptions.users.emailIsAlreadyRegistered'));
			}

			throw err;
		}
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
