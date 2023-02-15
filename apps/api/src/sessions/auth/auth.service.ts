import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '@/users/users.service';

import type { User } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async authenticate(email: string, password: string): Promise<User> {
		const user = await this.usersService.findBy({ email });

		if (!user || !(await bcrypt.compare(password, user.password))) {
			throw new UnauthorizedException('Invalid email or password');
		}

		return user;
	}
}
