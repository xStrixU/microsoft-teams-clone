import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import session from 'express-session';

import { RedisSessionStore } from '@/sessions/redis-session.store';
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE } from '@/sessions/sessions.constants';

import type { INestApplication } from '@nestjs/common';

import type { AppConfigService } from '@/app.types';

export const setupApp = (app: INestApplication) => {
	const config = app.get<AppConfigService>(ConfigService);
	const redisSessionStore = app.get(RedisSessionStore);

	app.use(
		session({
			name: SESSION_COOKIE_NAME,
			secret: config.get('SESSION_SECRET'),
			resave: false,
			saveUninitialized: false,
			rolling: true,
			store: redisSessionStore,
			cookie: {
				maxAge: SESSION_MAX_AGE,
			},
		})
	);

	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
	app.enableCors({
		origin: config.get('CORS_ORIGIN'),
		credentials: true,
	});
};
