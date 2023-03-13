import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class getMessagesQueryDto {
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	limit = 10;

	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	before?: number;
}
