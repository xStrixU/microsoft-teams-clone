import { HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';

import { createTestingModule } from './utils/create-testing-module';

import type { INestApplication } from '@nestjs/common';

describe('App', () => {
	let app: INestApplication;

	beforeAll(async () => {
		app = await createTestingModule();
	});

	describe('GET /', () => {
		it('should return HTTP status NOT_FOUND because this endpont is not defined', async () => {
			const { status } = await request(app.getHttpServer()).get('/').send();

			expect(status).toBe(HttpStatus.NOT_FOUND);
		});
	});
});
