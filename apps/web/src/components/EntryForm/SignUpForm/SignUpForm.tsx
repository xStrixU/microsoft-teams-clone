'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { signUpFormSchema } from './SignUpForm.schema';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Inputs/Input/Input';
import { PasswordInput } from '@/components/ui/Inputs/PasswordInput/PasswordInput';

import { useUser } from '@/hooks/useUser';
import { useYupForm } from '@/hooks/useYupForm';
import { createUser } from '@/services/users.service';

export const SignUpForm = () => {
	const router = useRouter();
	const { register: registerUser } = useUser();
	const { onSubmit, register, setError } = useYupForm(signUpFormSchema, data => {
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
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			<Input
				type="text"
				label="Full name"
				contentBefore={<BiUser size={18} />}
				required
				{...register('fullName')}
			/>
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
				autoComplete="new-password"
				contentBefore={<HiOutlineLockClosed size={18} />}
				required
				{...register('password')}
			/>
			<PasswordInput
				label="Confirm password"
				autoComplete="new-password"
				contentBefore={<HiOutlineLockClosed size={18} />}
				required
				{...register('confirmPassword')}
			/>
			<Button type="submit" appearance="primary" fill className="mt-3">
				Sign Up
			</Button>
		</form>
	);
};
