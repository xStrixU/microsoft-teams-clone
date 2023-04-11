import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputAppearance, ROOT_STYLES } from '../InputAppearance';

import type { ComponentProps } from 'react';

type TextareaProps = Omit<ComponentProps<typeof InputAppearance>, 'id' | 'children'> &
	JSX.IntrinsicElements['textarea'];

const sizes: Record<Exclude<TextareaProps['size'], undefined>, string> = {
	small: 'ui-px-2 ui-py-1',
	medium: 'ui-px-3 ui-py-1.5',
	large: 'ui-px-3.5 ui-py-2',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, required, fill, size = 'medium', error, placeholder, ...props }, ref) => {
		const id = useId();

		return (
			<InputAppearance
				id={id}
				label={label}
				required={required}
				fill={fill}
				size={size}
				error={error}
			>
				<textarea
					ref={ref}
					id={id}
					placeholder={placeholder || label}
					required={required}
					className={twMerge(ROOT_STYLES, 'resize-none', sizes[size])}
					{...props}
				/>
			</InputAppearance>
		);
	}
);

Textarea.displayName = 'Textarea';
