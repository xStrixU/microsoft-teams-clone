import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ROOT_STYLES, RootInput } from '../RootInput';

import type { ComponentProps } from 'react';

type TextareaProps = Omit<ComponentProps<typeof RootInput>, 'id' | 'children'> &
	JSX.IntrinsicElements['textarea'];

const sizes: Record<Exclude<TextareaProps['size'], undefined>, string> = {
	small: 'px-2 py-1',
	medium: 'px-3 py-1.5',
	large: 'px-3.5 py-2',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, required, fill, size = 'medium', error, placeholder, className, ...props }, ref) => {
		const id = useId();

		return (
			<RootInput id={id} label={label} required={required} fill={fill} size={size} error={error}>
				<textarea
					ref={ref}
					id={id}
					placeholder={placeholder || label}
					required={required}
					className={twMerge(ROOT_STYLES, 'resize-none', sizes[size], className)}
					{...props}
				/>
			</RootInput>
		);
	}
);

Textarea.displayName = 'Textarea';
