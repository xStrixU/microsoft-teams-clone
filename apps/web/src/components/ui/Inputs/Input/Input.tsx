import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ROOT_STYLES, RootInput } from '../RootInput';

import type { ComponentProps, ReactNode } from 'react';

type InputProps = Readonly<{
	contentBefore?: ReactNode;
	contentAfter?: ReactNode;
}> &
	Omit<ComponentProps<typeof RootInput>, 'id' | 'children'> &
	Omit<JSX.IntrinsicElements['input'], 'size'>;

const sizes: Record<Exclude<InputProps['size'], undefined>, string> = {
	small: 'h-7 px-1.5',
	medium: 'h-9 px-2.5',
	large: 'h-11 px-3',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			required,
			fill,
			size = 'medium',
			error,
			contentBefore,
			contentAfter,
			placeholder,
			className,
			...props
		},
		ref
	) => {
		const id = useId();

		return (
			<RootInput id={id} label={label} required={required} fill={fill} size={size} error={error}>
				{contentBefore && (
					<div className="ml-2 flex text-neutral-stroke-accessible-default">{contentBefore}</div>
				)}
				<input
					ref={ref}
					id={id}
					placeholder={placeholder || label}
					required={required}
					className={twMerge(ROOT_STYLES, sizes[size], className)}
					{...props}
				/>
				{contentAfter && (
					<div className="mr-2 flex text-neutral-stroke-accessible-default">{contentAfter}</div>
				)}
			</RootInput>
		);
	}
);

Input.displayName = 'Input';
