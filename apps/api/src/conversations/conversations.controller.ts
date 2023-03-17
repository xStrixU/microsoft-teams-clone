import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import {
	mapAppConversationToConversationDto,
	mapAppMessageToMessageDto,
} from './conversations.mapper';
import { ConversationsService } from './conversations.service';
import { ConversationDto } from './dto/conversation.dto';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { getMessagesQueryDto } from './dto/get-messages-query.dto';
import { MessageDto } from './dto/message.dto';

import { Auth } from '@/auth/auth.decorator';
import { AuthUser } from '@/auth/auth-user.decorator';
import { OpenAPIHttpException } from '@/common/openapi/openapi-http-exception';

@ApiTags('conversations')
@Controller('conversations')
export class ConversationsController {
	constructor(private readonly conversationsService: ConversationsService) {}

	@Post()
	@Auth()
	@ApiCreatedResponse({
		type: ConversationDto,
		description: 'Conversation has been created',
	})
	@ApiConflictResponse({
		type: OpenAPIHttpException,
		description: 'Something went wrong',
	})
	async create(
		@Body() createConversationDto: CreateConversationDto,
		@AuthUser() user: User
	): Promise<ConversationDto> {
		return mapAppConversationToConversationDto(
			await this.conversationsService.create(createConversationDto, user)
		);
	}

	@Post(':id/messages')
	@Auth()
	@ApiCreatedResponse({
		type: MessageDto,
		description: 'Message has been created',
	})
	@ApiConflictResponse({
		type: OpenAPIHttpException,
		description: 'Something went wrong or you are not a member of this conversation',
	})
	async createMessage(
		@Param('id') id: string,
		@Body() createMessageDto: CreateMessageDto,
		@AuthUser() user: User
	): Promise<MessageDto> {
		return mapAppMessageToMessageDto(
			await this.conversationsService.createMessage(id, createMessageDto, user)
		);
	}

	@Get(':id/messages')
	@Auth()
	@ApiOkResponse({
		type: [MessageDto],
		description: 'Returns last messages',
	})
	@ApiConflictResponse({
		type: OpenAPIHttpException,
		description: 'You are not a member of this conversation',
	})
	async getMessages(
		@Param('id') id: string,
		@Query() query: getMessagesQueryDto,
		@AuthUser() user: User
	): Promise<MessageDto[]> {
		const messages = await this.conversationsService.getMessages(id, query, user);

		return messages.map(mapAppMessageToMessageDto);
	}
}
