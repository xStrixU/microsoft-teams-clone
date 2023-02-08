import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SESSION_COOKIE_NAME } from '@/sessions/sessions.constants';

import type { INestApplication } from '@nestjs/common';

export const setupSwagger = (app: INestApplication) => {
	const config = new DocumentBuilder()
		.setTitle('microsoft-teams-clone API')
		.setVersion('1.0')
		.addCookieAuth(SESSION_COOKIE_NAME)
		.build();
	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('docs', app, document);
};
