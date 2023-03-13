import { ArrayNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateConversationDto {
	@IsArray()
	@ArrayNotEmpty()
	@IsNumber({}, { each: true })
	memberIds: number[];
}
