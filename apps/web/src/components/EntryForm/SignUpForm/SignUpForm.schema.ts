import { USER_PASSWORD_REGEX, USER_PASSWORD_REGEX_MESSAGE } from 'shared';
import { z } from 'zod';

import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

export const signUpFormSchema = z
	.object({
		fullName: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE),
		email: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE).email('Invalid email'),
		password: z
			.string()
			.nonempty(SCHEMA_REQUIRED_MESSAGE)
			.regex(USER_PASSWORD_REGEX, USER_PASSWORD_REGEX_MESSAGE),
		confirmPassword: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});
