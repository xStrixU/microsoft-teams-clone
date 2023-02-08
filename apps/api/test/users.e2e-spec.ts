import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';
import { createUserDto, register } from './utils/user';

import type { INestApplication } from '@nestjs/common';

describe('Users', () => {
	let app: INestApplication;
	let agent: request.SuperAgentTest;

	beforeAll(async () => {
		app = await createTestingModule();
		agent = request.agent(app.getHttpServer());
	});

	describe('POST /users', () => {
		it('should register a new user', async () => {
			const { status, body } = await register(agent);

			expect(status).toBe(HttpStatus.CREATED);
			expect(body.email).toBe(createUserDto.email);
		});

		it('should return HTTP status CONFLICT because the email is already registered', async () => {
			const { status } = await register(agent);

			expect(status).toBe(HttpStatus.CONFLICT);
		});
	});
});
