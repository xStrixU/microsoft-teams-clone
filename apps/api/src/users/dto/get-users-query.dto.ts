import { IsNotEmpty, IsString } from 'class-validator';

export class GetUsersQueryDto {
	@IsString()
	@IsNotEmpty()
	search: string;
}
