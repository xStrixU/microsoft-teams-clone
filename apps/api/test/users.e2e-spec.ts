import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';
import { createUserDto, login, register } from './utils/user';

import type { INestApplication } from '@nestjs/common';

import type { CreateUserDto } from '@/users/dto/create-user.dto';
import type { FoundUserDto } from '@/users/dto/found-user.dto';

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

	describe('GET /users', () => {
		beforeAll(async () => {
			await login(agent);
		});

		const createUserDtos: CreateUserDto[] = [
			{
				fullName: 'James Williams',
				email: 'james.williams@gmail.com',
				password: 'James123',
			},
			{
				fullName: 'Mary Williams',
				email: 'mary.williams@gmail.com',
				password: 'Mary123',
			},
			{
				fullName: 'James Davis',
				email: 'james.davis@gmail.com',
				password: 'James123',
			},
		];

		beforeAll(async () => {
			for (const createUserDto of createUserDtos) {
				await register(agent, createUserDto);
			}
		});

		it('should not find any user', async () => {
			const { status, body } = await agent.get(`/users?search=Amanda`);

			expect(status).toBe(HttpStatus.OK);
			expect(body.length).toBe(0);
		});

		it('should find James and Mary Williams', async () => {
			const { status, body } = await agent.get(`/users?search=Williams`);

			expect(status).toBe(HttpStatus.OK);
			expect(body.length).toBe(2);

			(body as FoundUserDto[]).forEach(foundUserDto => {
				const createUserDto = createUserDtos
					.slice(0, 2)
					.find(createUserDto => createUserDto.fullName === foundUserDto.fullName);

				expect(createUserDto).toBeTruthy();
			});
		});

		it('should find Williams and Davis James', async () => {
			const { status, body } = await agent.get(`/users?search=James`);

			expect(status).toBe(HttpStatus.OK);
			expect(body.length).toBe(2);

			(body as FoundUserDto[]).forEach(foundUserDto => {
				const createUserDto = [createUserDtos[0], createUserDtos[2]].find(
					createUserDto => createUserDto.fullName === foundUserDto.fullName
				);

				expect(createUserDto).toBeTruthy();
			});
		});

		it('should find only James Davis', async () => {
			const { status, body } = await agent.get(`/users?search=James Davis`);

			expect(status).toBe(HttpStatus.OK);
			expect(body.length).toBe(1);
			expect(body[0].fullName).toBe(createUserDtos[2].fullName);
		});

		it('should find only Mary Williams', async () => {
			const { status, body } = await agent.get(`/users?search=mary.williams@gmail.com`);

			expect(status).toBe(HttpStatus.OK);
			expect(body.length).toBe(1);
			expect(body[0].fullName).toBe(createUserDtos[1].fullName);
		});
	});
});
