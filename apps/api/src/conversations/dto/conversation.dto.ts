import type { FoundUserDto } from '@/users/dto/found-user.dto';

export class ConversationDto {
	id: string;
	isGroup: boolean;
	user?: FoundUserDto;
	name?: string;
}
