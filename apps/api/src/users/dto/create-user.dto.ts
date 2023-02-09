import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { USER_PASSWORD_REGEX } from 'common';

export class CreateUserDto {
	@IsNotEmpty()
	firstName: string;

	@IsNotEmpty()
	lastName: string;

	@IsEmail()
	email: string;

	@IsNotEmpty()
	@Matches(USER_PASSWORD_REGEX, {
		message: 'Password must be at least 5 characters long',
	})
	password: string;
}
