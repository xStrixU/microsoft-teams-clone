import * as yup from 'yup';

export interface SignInFormSchemaMessages {
	required: string;
}

export const createSignInFormSchema = ({ required }: SignInFormSchemaMessages) =>
	yup
		.object({
			email: yup.string().required(required),
			password: yup.string().required(required),
		})
		.required();
