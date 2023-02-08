import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

import type { FactoryProvider } from '@nestjs/common';

import type { AppConfigService } from '@/app.types';

export const REDIS_TOKEN = Symbol('REDIS');

export const redisProvider: FactoryProvider = {
	provide: REDIS_TOKEN,
	inject: [ConfigService],
	useFactory: async (configService: AppConfigService) => {
		const client = createClient({
			url: configService.get('REDIS_URL', { infer: true }),
		});

		await client.connect();

		return client;
	},
};
