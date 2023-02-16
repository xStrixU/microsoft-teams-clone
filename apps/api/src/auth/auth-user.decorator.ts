import { createParamDecorator } from '@nestjs/common';

import type { ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

export const AuthUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
	const { user } = ctx.switchToHttp().getRequest<Request>();

	return user;
});
