'use client';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { createSignInFormSchema } from './SignInForm.schema';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Inputs/Input/Input';
import { PasswordInput } from '@/components/common/Inputs/PasswordInput/PasswordInput';

import { useYupForm } from '@/hooks/useYupForm';

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
	const { onSubmit, register } = useYupForm(createSignInFormSchema(messages.schema), data => {
		console.log(data);
	});

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
