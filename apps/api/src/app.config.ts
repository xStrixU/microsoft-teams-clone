import { z } from 'zod';

import type { ConfigService } from '@nestjs/config';

export type AppConfigService = ConfigService<z.infer<typeof configValidationSchema>, true>;

const configValidationSchema = z.object({
	PORT: z.string().transform(Number),
	CORS_ORIGIN: z.string(),
	PASSWORD_SALT_OR_ROUNDS: z.union([z.string().regex(/^\d+$/).transform(Number), z.string()]),
	SESSION_SECRET: z.string(),
	REDIS_URL: z.string(),
});

export const validateConfig = (data: unknown): { error: unknown; value: unknown } => {
	const parsedData = configValidationSchema.safeParse(data);

	return parsedData.success
		? {
				error: null,
				value: parsedData.data,
		  }
		: {
				error: parsedData.error,
				value: null,
		  };
};
