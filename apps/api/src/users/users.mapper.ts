import type { UserDto } from './dto/user.dto';
import type { User } from '@prisma/client';

export const mapUserToUserDto = ({ id, fullName, email }: User): UserDto => ({
	id,
	fullName,
	email,
});
