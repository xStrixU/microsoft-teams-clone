import type { FoundUserDto } from '@/users/dto/found-user.dto';

export class MessageDto {
	id: number;
	author: FoundUserDto;
	content: string;
	createdAt: number;
}
