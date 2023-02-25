import { describe, expect, it } from 'vitest';

import { mapUserToFoundUserDto, mapUserToUserDto } from './users.mapper';

import type { FoundUserDto } from './dto/found-user.dto';
import type { UserDto } from './dto/user.dto';
import type { User } from '@prisma/client';

describe('users.mapper', () => {
	const user: User = {
		id: 1,
		fullName: 'Alex Smith',
		email: 'alex@gmail.com',
		password: 'Alex123',
	};

	it('should map User to UserDto', () => {
		const userDto: UserDto = {
			id: user.id,
			fullName: user.fullName,
			email: user.email,
		};

		expect(mapUserToUserDto(user)).toStrictEqual(userDto);
	});

	it('should map User to FoundUserDto', () => {
		const foundUserDto: FoundUserDto = {
			id: user.id,
			fullName: user.fullName,
		};

		expect(mapUserToFoundUserDto(user)).toStrictEqual(foundUserDto);
	});
});
