import { ConflictException, Injectable } from '@nestjs/common';

import { CONVERSATION_ROOM_PREFIX, ConversationsGateway } from './conversations.gateway';
import { mapAppMessageToMessageDto } from './conversations.mapper';

import { PrismaService } from '@/database/prisma/prisma.service';
import { isPrismaError } from '@/database/prisma/prisma.utils';

import type { AppConversation, AppMessage } from './conversations.types';
import type { CreateConversationDto } from './dto/create-conversation.dto';
import type { CreateMessageDto } from './dto/create-message.dto';
import type { getMessagesQueryDto } from './dto/get-messages-query.dto';
import type { Prisma, User } from '@prisma/client';

export const createConversationInclude = (user: User) =>
	({
		members: {
			where: {
				NOT: {
					memberId: user.id,
				},
			},
			include: {
				member: true,
			},
		},
	} satisfies Prisma.ConversationInclude);

export const messageInclude = {
	author: true,
} satisfies Prisma.MessageInclude;

@Injectable()
export class ConversationsService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly gateway: ConversationsGateway
	) {}

	async create({ memberIds }: CreateConversationDto, user: User): Promise<AppConversation> {
		try {
			const conversation = await this.prisma.conversation.create({
				data: {
					members: {
						create: [{ memberId: user.id }, ...memberIds.map(memberId => ({ memberId }))],
					},
				},
				include: createConversationInclude(user),
			});

			return conversation;
		} catch (err) {
			if (isPrismaError(err)) {
				throw new ConflictException('Something went wrong');
			}

			throw err;
		}
	}

	async createMessage(
		conversationId: string,
		{ content }: CreateMessageDto,
		user: User
	): Promise<AppMessage> {
		try {
			await this.checkIfUserIsInConversation(user, conversationId);

			const message = await this.prisma.message.create({
				data: {
					conversationId,
					authorId: user.id,
					content,
				},
				include: messageInclude,
			});

			this.gateway.server
				.to(CONVERSATION_ROOM_PREFIX + conversationId)
				.emit('message', mapAppMessageToMessageDto(message));

			return message;
		} catch (err) {
			if (isPrismaError(err)) {
				throw new ConflictException('Something went wrong');
			}

			throw err;
		}
	}

	async getMessages(
		conversationId: string,
		{ limit, before }: getMessagesQueryDto,
		user: User
	): Promise<AppMessage[]> {
		await this.checkIfUserIsInConversation(user, conversationId);

		const messages = await this.prisma.message.findMany({
			...(before && {
				cursor: {
					id: before,
				},
				skip: 1,
			}),
			take: limit,
			orderBy: {
				createdAt: 'desc',
			},
			include: messageInclude,
		});

		return messages.reverse();
	}

	private async checkIfUserIsInConversation(user: User, conversationId: string): Promise<void> {
		const conversation = await this.prisma.conversation.findFirst({
			where: {
				id: conversationId,
				members: {
					some: {
						memberId: user.id,
					},
				},
			},
		});

		if (!conversation) {
			throw new ConflictException('You are not a member of this conversation');
		}
	}

	findAllBy(where: Prisma.ConversationWhereInput, user: User): Promise<AppConversation[]> {
		return this.prisma.conversation.findMany({ where, include: createConversationInclude(user) });
	}
}
