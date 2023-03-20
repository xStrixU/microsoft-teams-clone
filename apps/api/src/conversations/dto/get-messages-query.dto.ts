import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class GetMessagesQueryDto {
	@IsOptional()
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	limit?: number;

	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	before?: number;
}
