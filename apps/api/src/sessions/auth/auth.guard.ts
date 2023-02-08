import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UsersService } from '@/users/users.service';

import type { CanActivate, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly usersService: UsersService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>();
		const { userId } = request.session;

		if (userId) {
			const user = await this.usersService.findBy({ id: userId });

			if (user) {
				request.user = user;

				return true;
			}
		}

		throw new UnauthorizedException();
	}
}
