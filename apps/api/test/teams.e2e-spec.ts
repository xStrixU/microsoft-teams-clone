import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';
import { login, register } from './utils/user';

import type { INestApplication } from '@nestjs/common';

import type { CreateTeamDto } from '@/teams/dto/create-team.dto';
import type { TeamDto } from '@/teams/dto/team.dto';

describe('Teams', () => {
	let app: INestApplication;
	let agent: request.SuperAgentTest;

	beforeAll(async () => {
		app = await createTestingModule();
		agent = request.agent(app.getHttpServer());

		await register(agent);
	});

	describe('POST /teams', () => {
		const createTeamDtos: CreateTeamDto[] = [
			{
				name: 'First team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			},
			{
				name: 'Second team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			},
		];

		it('should return HTTP status UNAUTHORIZED because the user is not logged in', async () => {
			const { status } = await agent.post('/teams').send();

			expect(status).toBe(HttpStatus.UNAUTHORIZED);
		});

		it('should create a new team', async () => {
			await login(agent);

			for (const createTeamDto of createTeamDtos) {
				const { status, body } = await agent.post('/teams').send(createTeamDto);

				expect(status).toBe(HttpStatus.CREATED);
				expect(body.name).toBe(createTeamDto.name);
				expect(body.description).toBe(createTeamDto.description);
			}
		});

		it("should return a list of current user's teams", async () => {
			const { status, body } = await agent.get('/users/me/teams').send();

			expect(status).toBe(HttpStatus.OK);
			expect(Array.isArray(body)).toBe(true);

			(body as TeamDto[]).forEach(teamDto => {
				const createTeamDto = createTeamDtos.find(
					createTeamDto =>
						createTeamDto.name === teamDto.name && createTeamDto.description === teamDto.description
				);

				expect(createTeamDto).toBeTruthy();
			});
		});
	});
});
