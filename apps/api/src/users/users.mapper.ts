import type { UserDto } from './dto/user.dto';
import type { User } from '@prisma/client';

export const mapUserToUserDto = ({ id, firstName, lastName, email }: User): UserDto => ({
	id,
	firstName,
	lastName,
	email,
});
