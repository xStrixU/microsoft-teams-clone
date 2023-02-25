import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { AuthGuard } from './auth.guard';

import { OpenAPIHttpException } from '@/common/openapi/openapi-http-exception';

export const Auth = () =>
	applyDecorators(
		UseGuards(AuthGuard),
		ApiCookieAuth(),
		ApiUnauthorizedResponse({
			type: OpenAPIHttpException,
			description: 'You are not authenticated',
		})
	);
