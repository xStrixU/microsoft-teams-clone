import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
	@IsNotEmpty()
	name: string;

	@IsString()
	description: string;
}
