import { describe, expect, it } from 'vitest';

import {
	mapAppMessageToMessageDto,
	mapConversationToConversationDto,
} from './conversations.mapper';

import { mapUserToFoundUserDto } from '@/users/users.mapper';

import type { AppMessage } from './conversations.types';
import type { ConversationDto } from './dto/conversation-dto';
import type { MessageDto } from './dto/message.dto';
import type { Conversation, User } from '@prisma/client';

describe('conversations.mapper', () => {
	const conversation: Conversation = {
		id: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
		name: 'Lorem ipsum',
	};

	it('should map Conversation to ConversationDto', () => {
		const conversationDto: ConversationDto = {
			id: conversation.id,
			name: conversation.name,
		};

		expect(mapConversationToConversationDto(conversation)).toStrictEqual(conversationDto);
	});

	it('should map AppMessage to MessageDto', () => {
		const author: User = {
			id: 1,
			fullName: 'Alex Smith',
			email: 'alex@gmail.com',
			password: 'Alex123',
		};
		const message: AppMessage = {
			id: 1,
			conversationId: conversation.id,
			authorId: author.id,
			content: 'Lorem ipsum',
			createdAt: new Date(),
			author,
		};
		const messageDto: MessageDto = {
			id: message.id,
			author: mapUserToFoundUserDto(author),
			content: message.content,
		};

		expect(mapAppMessageToMessageDto(message)).toStrictEqual(messageDto);
	});
});
