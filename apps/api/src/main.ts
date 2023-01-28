import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import type { AppConfigService } from './app.types';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = app.get<AppConfigService>(ConfigService);

	await app.listen(config.get('PORT', { infer: true }));
}

bootstrap();
