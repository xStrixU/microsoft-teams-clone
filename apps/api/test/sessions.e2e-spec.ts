import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';
import { createSessionDto, login, logout, register } from './utils/user';

import { SESSION_COOKIE_NAME } from '@/sessions/sessions.constants';

import type { INestApplication } from '@nestjs/common';

describe('Sessions', () => {
	let app: INestApplication;
	let agent: request.SuperAgentTest;

	beforeAll(async () => {
		app = await createTestingModule();
		agent = request.agent(app.getHttpServer());

		await register(agent);
	});

	describe('POST /sessions', () => {
		it('should return HTTP status UNAUTHORIZED because the email is invalid', async () => {
			const { status } = await login(agent, {
				...createSessionDto,
				email: 'abc@gmail.com',
			});

			expect(status).toBe(HttpStatus.UNAUTHORIZED);
		});

		it('should return HTTP status UNAUTHORIZED because the password is invalid', async () => {
			const { status } = await login(agent, {
				...createSessionDto,
				password: 'abc123',
			});

			expect(status).toBe(HttpStatus.UNAUTHORIZED);
		});

		it('should create a new session', async () => {
			const { body, headers, status } = await login(agent);

			expect(status).toBe(HttpStatus.CREATED);
			expect(
				(headers['set-cookie'] as string[]).find(header =>
					header.includes(`${SESSION_COOKIE_NAME}=`)
				)
			).toBeTruthy();
			expect(body.email).toBe(createSessionDto.email);

			await logout(agent);
		});
	});

	describe('GET /sessions/me', () => {
		it('should return HTTP status UNAUTHORIZED because the session is not created', async () => {
			const { status } = await agent.get('/sessions/me').send();

			expect(status).toBe(HttpStatus.UNAUTHORIZED);
		});

		it('should return the user associated with the current session', async () => {
			await login(agent);

			const { body, status } = await agent.get('/sessions/me').send();

			expect(status).toBe(HttpStatus.OK);
			expect(body.email).toBe(createSessionDto.email);

			await logout(agent);
		});
	});

	describe('DELETE /sessions/me', () => {
		it('should delete the current session', async () => {
			await login(agent);

			const { status: statusBefore } = await agent.get('/sessions/me');

			expect(statusBefore).toBe(HttpStatus.OK);

			await logout(agent);

			const { status: statusAfter } = await agent.get('/sessions/me');

			expect(statusAfter).toBe(HttpStatus.UNAUTHORIZED);
		});
	});
});
