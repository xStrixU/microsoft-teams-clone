'use client';

import { BiUser } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { createSignUpFormSchema } from './SignUpForm.schema';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Inputs/Input/Input';
import { PasswordInput } from '@/components/common/Inputs/PasswordInput/PasswordInput';

import { useYupForm } from '@/hooks/useYupForm';

import type { SignUpFormSchemaMessages } from './SignUpForm.schema';

type SignUpFormProps = Readonly<{
	messages: {
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		confirmPassword: string;
		signUp: string;
		schema: SignUpFormSchemaMessages;
	};
}>;

export const SignUpForm = ({ messages }: SignUpFormProps) => {
	const { onSubmit, register } = useYupForm(createSignUpFormSchema(messages.schema), data => {
		console.log(data);
	});

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			<Input
				type="text"
				label={messages.firstName}
				contentBefore={<BiUser size={18} />}
				required
				{...register('firstName')}
			/>
			<Input
				type="text"
				label={messages.lastName}
				contentBefore={<BiUser size={18} />}
				required
				{...register('lastName')}
			/>
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
			<PasswordInput
				label={messages.confirmPassword}
				contentBefore={<HiOutlineLockClosed size={18} />}
				required
				{...register('confirmPassword')}
			/>
			<Button type="submit" appearance="primary" fill className="mt-3">
				{messages.signUp}
			</Button>
		</form>
	);
};
