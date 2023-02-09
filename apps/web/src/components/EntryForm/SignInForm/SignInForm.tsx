'use client';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { createSignInFormSchema } from './SignInForm.schema';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Inputs/Input/Input';
import { PasswordInput } from '@/components/common/Inputs/PasswordInput/PasswordInput';

import { useUser } from '@/hooks/useUser';
import { useYupForm } from '@/hooks/useYupForm';
import { createSession } from '@/services/sessions.service';

import type { SignInFormSchemaMessages } from './SignInForm.schema';

type SignInFormProps = Readonly<{
	messages: {
		email: string;
		password: string;
		signIn: string;
		schema: SignInFormSchemaMessages;
	};
}>;

export const SignInForm = ({ messages }: SignInFormProps) => {
	const { login } = useUser();
	const { onSubmit, register, setError } = useYupForm(
		createSignInFormSchema(messages.schema),
		data => {
			login.mutate(data, {
				onError: err => {
					if (err instanceof createSession.Error) {
						const error = err.getActualType();

						if (error.status === 401) {
							const { message } = error.data;

							setError('email', { message });
							setError('password', { message });
						}
					}
				},
			});
		}
	);

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			<Input
				type="email"
				label={messages.email}
				contentBefore={<MdAlternateEmail size={18} />}
				required
				{...register('email')}
			/>
			<PasswordInput
				label={messages.password}
				contentBefore={<HiOutlineLockClosed size={18} />}
				required
				{...register('password')}
			/>
			<Button type="submit" appearance="primary" fill className="mt-3">
				{messages.signIn}
			</Button>
		</form>
	);
};
