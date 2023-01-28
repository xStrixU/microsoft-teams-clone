import type { CONFIG_VALIDATION_SCHEMA } from './app.constants';
import type { ConfigService } from '@nestjs/config';
import type * as zod from 'zod';

export type AppConfigService = ConfigService<zod.infer<typeof CONFIG_VALIDATION_SCHEMA>, true>;
