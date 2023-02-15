'use client';

import { forwardRef, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

import { Input } from '../Input/Input';

import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<ComponentProps<typeof Input>, 'type' | 'contentAfter'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const togglePasswordIcon = isPasswordShown ? <BiShow size={18} /> : <BiHide size={18} />;

	return (
		<Input
			ref={ref}
			type={isPasswordShown ? 'text' : 'password'}
			contentAfter={
				<button
					type="button"
					tabIndex={-1}
					aria-hidden
					onClick={() => setIsPasswordShown(!isPasswordShown)}
				>
					{togglePasswordIcon}
				</button>
			}
			{...props}
		/>
	);
});

PasswordInput.displayName = 'PasswordInput';
