import { Injectable } from '@nestjs/common';

import { AuthService } from './auth/auth.service';

import type { CreateSessionDto } from './dto/create-session.dto';
import type { User } from '@prisma/client';
import type { Session } from 'express-session';

@Injectable()
export class SessionsService {
	constructor(private readonly authService: AuthService) {}

	async create({ email, password }: CreateSessionDto, session: Session): Promise<User> {
		const user = await this.authService.authenticate(email, password);

		session.userId = user.id;

		return user;
	}
}
