import * as zod from 'zod';

export const CONFIG_VALIDATION_SCHEMA = zod.object({
	PORT: zod.string().transform(Number),
	CORS_ORIGIN: zod.string(),
	PASSWORD_SALT_OR_ROUNDS: zod.union([zod.string().regex(/^\d+$/).transform(Number), zod.string()]),
	SESSION_SECRET: zod.string(),
	REDIS_URL: zod.string(),
});
