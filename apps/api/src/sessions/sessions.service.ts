import { Injectable } from '@nestjs/common';

import { AuthService } from './auth/auth.service';

import type { CreateSessionDto } from './dto/create-session.dto';
import type { User } from '@prisma/client';
import type { Session } from 'express-session';

import type { AppI18nContext } from '@/common/i18n/i18n.types';

@Injectable()
export class SessionsService {
	constructor(private readonly authService: AuthService) {}

	async create(
		{ email, password }: CreateSessionDto,
		session: Session,
		i18n: AppI18nContext
	): Promise<User> {
		const user = await this.authService.authenticate({ email, password }, i18n);

		session.userId = user.id;

		return user;
	}
}
