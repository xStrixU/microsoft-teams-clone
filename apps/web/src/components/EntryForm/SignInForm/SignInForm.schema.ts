import * as yup from 'yup';

import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

export const signInFormSchema = yup
	.object({
		email: yup.string().required(SCHEMA_REQUIRED_MESSAGE),
		password: yup.string().required(SCHEMA_REQUIRED_MESSAGE),
	})
	.required();
