import { IsNotEmpty } from 'class-validator';

export class CreateSessionDto {
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	password: string;
}
