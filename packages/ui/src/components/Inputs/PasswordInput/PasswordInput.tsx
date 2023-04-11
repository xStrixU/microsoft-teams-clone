'use client';

import { forwardRef, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

import { TextInput } from '../TextInput/TextInput';

import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<ComponentProps<typeof TextInput>, 'type' | 'contentAfter'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	return (
		<TextInput
			ref={ref}
			type={isPasswordShown ? 'text' : 'password'}
			contentAfter={
				<button
					type="button"
					tabIndex={-1}
					aria-hidden
					onClick={() => setIsPasswordShown(!isPasswordShown)}
				>
					{isPasswordShown ? <BiShow size={18} /> : <BiHide size={18} />}
				</button>
			}
			{...props}
		/>
	);
});

PasswordInput.displayName = 'PasswordInput';
