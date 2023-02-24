import { USER_PASSWORD_REGEX, USER_PASSWORD_REGEX_MESSAGE } from 'common';
import * as yup from 'yup';

import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

export const signUpFormSchema = yup
	.object({
		fullName: yup.string().required(SCHEMA_REQUIRED_MESSAGE),
		email: yup.string().email('Invalid email').required(SCHEMA_REQUIRED_MESSAGE),
		password: yup
			.string()
			.required(SCHEMA_REQUIRED_MESSAGE)
			.matches(USER_PASSWORD_REGEX, USER_PASSWORD_REGEX_MESSAGE),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords do not match')
			.required(SCHEMA_REQUIRED_MESSAGE),
	})
	.required();
