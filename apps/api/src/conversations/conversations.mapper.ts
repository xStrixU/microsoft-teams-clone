import { mapUserToFoundUserDto } from '@/users/users.mapper';

import type { AppMessage } from './conversations.types';
import type { ConversationDto } from './dto/conversation.dto';
import type { MessageDto } from './dto/message.dto';
import type { Conversation } from '@prisma/client';

export const mapConversationToConversationDto = ({ id, name }: Conversation): ConversationDto => ({
	id,
	name,
});

export const mapAppMessageToMessageDto = ({ id, author, content }: AppMessage): MessageDto => ({
	id,
	author: mapUserToFoundUserDto(author),
	content,
});
