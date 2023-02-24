import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { USER_PASSWORD_REGEX } from 'common';

export class CreateUserDto {
	@IsNotEmpty()
	fullName: string;

	@IsEmail()
	email: string;

	@IsNotEmpty()
	@Matches(USER_PASSWORD_REGEX, {
		message: 'Password must be at least 5 characters long',
	})
	password: string;
}
