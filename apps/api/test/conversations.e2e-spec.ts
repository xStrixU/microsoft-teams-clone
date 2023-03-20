import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';
import { login, register } from './utils/user';

import type { INestApplication } from '@nestjs/common';

import type { CreateConversationDto } from '@/conversations/dto/create-conversation.dto';
import type { CreateMessageDto } from '@/conversations/dto/create-message.dto';
import type { MessageDto } from '@/conversations/dto/message.dto';
import type { CreateUserDto } from '@/users/dto/create-user.dto';

describe('Conversations', () => {
	let app: INestApplication;
	let agent: request.SuperAgentTest;
	let conversationId: string;

	const firstUser: CreateUserDto = {
		fullName: 'Alex Smith',
		email: 'alex@gmail.com',
		password: 'Alex123',
	};
	const secondUser: CreateUserDto = {
		fullName: 'James Williams',
		email: 'james.williams@gmail.com',
		password: 'James123',
	};
	const messages: CreateMessageDto[] = [
		{ content: 'Lorem' },
		{ content: 'ipsum' },
		{ content: 'dolor' },
		{ content: 'sit' },
		{ content: 'amet' },
		{ content: 'consectetur' },
		{ content: 'adipiscing' },
		{ content: 'elit.' },
		{ content: 'Quisque' },
		{ content: 'fermentum' },
		{ content: 'blandit' },
		{ content: 'diam,' },
		{ content: 'quis' },
		{ content: 'consectetur' },
		{ content: 'diam' },
		{ content: 'condimentum' },
		{ content: 'ac.' },
	];

	beforeAll(async () => {
		app = await createTestingModule();
		agent = request.agent(app.getHttpServer());

		await register(agent, firstUser);
		await register(agent, secondUser);
	});

	describe('POST /conversations', () => {
		it('should return HTTP status UNAUTHORIZED because the user is not logged in', async () => {
			const { status } = await agent.post('/conversations').send();

			expect(status).toBe(HttpStatus.UNAUTHORIZED);
		});

		it('should create a new conversation', async () => {
			await login(agent, { email: firstUser.email, password: firstUser.password });

			const { body: usersBody } = await agent.get(`/users?search=${secondUser.email}`);
			const secondUserId = usersBody[0].id;

			const { status, body } = await agent.post('/conversations').send({
				memberIds: [secondUserId],
			} satisfies CreateConversationDto);

			expect(status).toBe(HttpStatus.CREATED);
			expect(typeof body.id).toBe('string');

			conversationId = body.id;
		});
	});

	describe('POST /conversations', () => {
		it('should send messages', async () => {
			for (const createMessageDto of messages) {
				const { status, body } = await agent
					.post(`/conversations/${conversationId}/messages`)
					.send(createMessageDto);

				expect(status).toBe(HttpStatus.CREATED);
				expect(body.content).toBe(createMessageDto.content);
				expect(body.author.fullName).toBe(firstUser.fullName);
			}
		});
	});

	describe('GET /conversations', () => {
		let lastMessage: MessageDto;

		it('should return the last 10 messages', async () => {
			const { status, body } = await agent.get(`/conversations/${conversationId}/messages`).send();

			expect(status).toBe(HttpStatus.OK);

			messages
				.slice(-10)
				.reverse()
				.forEach((message, i) => {
					expect(body[i].content).toBe(message.content);
				});

			lastMessage = body[body.length - 1];
		});

		it('should return the next 5 messages', async () => {
			const { status, body } = await agent
				.get(`/conversations/${conversationId}/messages?limit=5&before=${lastMessage.id}`)
				.send();

			expect(status).toBe(HttpStatus.OK);

			messages
				.slice(-15, -10)
				.reverse()
				.forEach((message, i) => {
					expect(body[i].content).toBe(message.content);
				});
		});
	});
});
