import { describe, expect, it } from 'vitest';

import {
	mapAppConversationToConversationDto,
	mapAppMessageToMessageDto,
} from './conversations.mapper';

import { mapUserToFoundUserDto } from '@/users/users.mapper';

import type { AppConversation, AppMessage } from './conversations.types';
import type { ConversationDto } from './dto/conversation.dto';
import type { MessageDto } from './dto/message.dto';
import type { Conversation, User } from '@prisma/client';

describe('conversations.mapper', () => {
	it('should map AppConversation with user to ConversationDto', () => {
		const conversation = {
			id: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
			name: null,
			members: [
				{
					conversationId: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
					memberId: 1,
					member: {
						id: 1,
						fullName: 'Alex Smith',
						email: 'alex@gmail.com',
						password: 'Alex123',
					},
				},
			],
		} satisfies AppConversation;
		const conversationDto: ConversationDto = {
			id: conversation.id,
			isGroup: false,
			user: mapUserToFoundUserDto(conversation.members[0].member),
		};

		expect(mapAppConversationToConversationDto(conversation)).toStrictEqual(conversationDto);
	});

	it('should map group AppConversation to group ConversationDto', () => {
		const conversation = {
			id: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
			name: null,
			members: [
				{
					conversationId: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
					memberId: 1,
					member: {
						id: 1,
						fullName: 'Alex Smith',
						email: 'alex@gmail.com',
						password: 'Alex123',
					},
				},
				{
					conversationId: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
					memberId: 2,
					member: {
						id: 2,
						fullName: 'James Williams',
						email: 'james@gmail.com',
						password: 'James123',
					},
				},
			],
		} satisfies AppConversation;
		const conversationDto: ConversationDto = {
			id: conversation.id,
			isGroup: true,
			name: conversation.members.map(({ member }) => member.fullName).join(', '),
		};

		expect(mapAppConversationToConversationDto(conversation)).toStrictEqual(conversationDto);
	});

	it('should map AppMessage to MessageDto', () => {
		const conversation: Conversation = {
			id: '75ac22cf-5e90-4a62-9531-a1a7f45f55d0',
			name: 'Lorem ipsum',
		};
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
			createdAt: message.createdAt.getTime(),
		};

		expect(mapAppMessageToMessageDto(message)).toStrictEqual(messageDto);
	});
});
