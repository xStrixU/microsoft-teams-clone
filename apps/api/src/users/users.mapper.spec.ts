import { describe, expect, it } from 'vitest';

import { mapUserToUserDto } from './users.mapper';

import type { UserDto } from './dto/user.dto';
import type { User } from '@prisma/client';

describe('users.mapper', () => {
	it('should map User to UserDto', () => {
		const user: User = {
			id: 1,
			firstName: 'Alex',
			lastName: 'Smith',
			email: 'alex@gmail.com',
			password: 'Alex123',
		};
		const userDto: UserDto = {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
		};

		expect(mapUserToUserDto(user)).toStrictEqual(userDto);
	});
});
