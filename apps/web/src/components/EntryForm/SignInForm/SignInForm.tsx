'use client';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { signInFormSchema } from './SignInForm.schema';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Inputs/Input/Input';
import { PasswordInput } from '@/components/ui/Inputs/PasswordInput/PasswordInput';

import { useUser } from '@/hooks/useUser';
import { useYupForm } from '@/hooks/useYupForm';
import { createSession } from '@/services/sessions.service';

export const SignInForm = () => {
	const { login } = useUser();
	const { onSubmit, register, setError } = useYupForm(signInFormSchema, data => {
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
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			<Input
				type="email"
				label="Email"
				autoComplete="username"
				contentBefore={<MdAlternateEmail size={18} />}
				required
				{...register('email')}
			/>
			<PasswordInput
				label="Password"
				autoComplete="current-password"
				contentBefore={<HiOutlineLockClosed size={18} />}
				required
				{...register('password')}
			/>
			<Button type="submit" appearance="primary" fill className="mt-3">
				Sign In
			</Button>
		</form>
	);
};
