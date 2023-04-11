'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { Button, PasswordInput, TextInput } from 'ui';

import { signUpFormSchema } from './SignUpForm.schema';

import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createUser } from '@/services/users.service';

export const SignUpForm = () => {
	const router = useRouter();
	const { register: registerUser } = useUser();
	const {
		onSubmit,
		register,
		setError,
		formState: { errors },
	} = useZodForm(signUpFormSchema, data => {
		registerUser.mutate(data, {
			onSuccess: () => {
				toast.success('Signed up successfully');
				router.push('/sign-in');
			},
			onError: err => {
				if (err instanceof createUser.Error) {
					const error = err.getActualType();

					if (error.status === 409) {
						const { message } = error.data;

						setError('email', { message });
					}
				}
			},
		});
	});

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3 flex flex-col gap-4">
				<TextInput
					type="text"
					label="Full name"
					contentBefore={<BiUser size={18} />}
					required
					error={errors.fullName?.message}
					{...register('fullName')}
				/>
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
					autoComplete="new-password"
					contentBefore={<HiOutlineLockClosed size={18} />}
					required
					error={errors.password?.message}
					{...register('password')}
				/>
				<PasswordInput
					label="Confirm password"
					autoComplete="new-password"
					contentBefore={<HiOutlineLockClosed size={18} />}
					required
					error={errors.confirmPassword?.message}
					{...register('confirmPassword')}
				/>
			</div>
			<Button type="submit" appearance="primary" fill>
				Sign Up
			</Button>
		</form>
	);
};
