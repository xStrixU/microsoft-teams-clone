import { USER_PASSWORD_REGEX } from 'common';
import * as yup from 'yup';

export interface SignUpFormSchemaMessages {
	required: string;
	invalidEmail: string;
	invalidPassword: string;
	passwordsDoNotMatch: string;
}

export const createSignUpFormSchema = ({
	required,
	invalidEmail,
	invalidPassword,
	passwordsDoNotMatch,
}: SignUpFormSchemaMessages) =>
	yup
		.object({
			firstName: yup.string().required(required),
			lastName: yup.string().required(required),
			email: yup.string().email(invalidEmail).required(required),
			password: yup.string().required(required).matches(USER_PASSWORD_REGEX, invalidPassword),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], passwordsDoNotMatch)
				.required(required),
		})
		.required();
