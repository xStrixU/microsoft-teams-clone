import { describe, expect, it } from 'vitest';

import { mapUserToUserDto } from './users.mapper';

import type { UserDto } from './dto/user.dto';
import type { User } from '@prisma/client';

describe('users.mapper', () => {
	it('should map User to UserDto', () => {
		const user: User = {
			id: 1,
			fullName: 'Alex Smith',
			email: 'alex@gmail.com',
			password: 'Alex123',
		};
		const userDto: UserDto = {
			id: user.id,
			fullName: user.fullName,
			email: user.email,
		};

		expect(mapUserToUserDto(user)).toStrictEqual(userDto);
	});
});
