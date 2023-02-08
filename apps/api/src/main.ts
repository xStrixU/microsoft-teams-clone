import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setupApp } from './common/setups/app.setup';
import { setupSwagger } from './common/setups/swagger.setup';

import type { AppConfigService } from './app.types';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = app.get<AppConfigService>(ConfigService);

	setupApp(app);
	setupSwagger(app);

	await app.listen(config.get('PORT', { infer: true }));
}

bootstrap();
