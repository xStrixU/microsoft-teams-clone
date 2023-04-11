'use client';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { Button, PasswordInput, TextInput } from 'ui';

import { signInFormSchema } from './SignInForm.schema';

import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createSession } from '@/services/sessions.service';

export const SignInForm = () => {
	const { login } = useUser();
	const {
		onSubmit,
		register,
		setError,
		formState: { errors },
	} = useZodForm(signInFormSchema, data => {
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
	});

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3 flex flex-col gap-4">
				<TextInput
					type="email"
					label="Email"
					autoComplete="username"
					contentBefore={<MdAlternateEmail size={18} />}
					required
					error={errors.email?.message}
					{...register('email')}
				/>
				<PasswordInput
					label="Password"
					autoComplete="current-password"
					contentBefore={<HiOutlineLockClosed size={18} />}
					required
					error={errors.password?.message}
					{...register('password')}
				/>
			</div>
			<Button type="submit" appearance="primary" fill>
				Sign In
			</Button>
		</form>
	);
};
