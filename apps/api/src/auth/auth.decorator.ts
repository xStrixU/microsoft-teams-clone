import { applyDecorators, UseGuards } from '@nestjs/common';

import { AuthGuard } from './auth.guard';

export const Auth = () => applyDecorators(UseGuards(AuthGuard));
