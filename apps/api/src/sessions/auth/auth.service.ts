import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '@/users/users.service';

import type { User } from '@prisma/client';

import type { AppI18nContext } from '@/common/i18n/i18n.types';

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async authenticate(
		{ email, password }: { email: string; password: string },
		i18n: AppI18nContext
	): Promise<User> {
		const user = await this.usersService.findBy({ email });

		if (!user || !(await bcrypt.compare(password, user.password))) {
			throw new UnauthorizedException(i18n.t('exceptions.auth.invalidEmailOrPassword'));
		}

		return user;
	}
}
