import { z } from 'zod';

import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

export const signInFormSchema = z.object({
	email: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE),
	password: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE),
});
