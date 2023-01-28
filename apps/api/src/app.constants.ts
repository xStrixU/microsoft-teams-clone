import * as zod from 'zod';

export const CONFIG_VALIDATION_SCHEMA = zod.object({
	PORT: zod.string().transform(Number),
});
