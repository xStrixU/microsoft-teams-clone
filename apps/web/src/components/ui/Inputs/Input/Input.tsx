import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import ErrorIcon from '~/icons/error.svg';

import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

const sizes = {
	small: {
		wrapper: 'text-xs',
		input: 'h-7 px-1.5',
	},
	medium: {
		wrapper: 'text-sm',
		input: 'h-9 px-2.5',
	},
	large: {
		wrapper: 'text-base',
		input: 'h-11 px-3',
	},
} as const;

type InputProps = Readonly<{
	label: string;
	size?: keyof typeof sizes;
	contentBefore?: ReactNode;
	contentAfter?: ReactNode;
	error?: FieldError;
}> &
	Omit<JSX.IntrinsicElements['input'], 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ label, size = 'medium', contentBefore, contentAfter, error, className, required, ...props },
		ref
	) => {
		const id = useId();

		return (
			<div className={sizes[size]['wrapper']}>
				<label htmlFor={id} className="mb-1 text-neutral-foreground">
					{label}
					{required && <span className="ml-1 text-red-foreground">*</span>}
				</label>
				<div
					className={twMerge(
						'relative flex items-center rounded border border-neutral-stroke-default border-b-neutral-stroke-accessible-default bg-neutral-background-default transition-colors focus-within:border-neutral-stroke-pressed focus-within:border-b-neutral-stroke-accessible-default hover:border-neutral-stroke-hover hover:border-b-neutral-stroke-accessible-default',
						'after:clip-path-input-underline after:absolute after:-bottom-px after:-left-px after:-right-px after:h-1 after:scale-x-0 after:rounded-b after:border-b-2 after:border-b-brand-default after:transition-transform after:duration-200 focus-within:after:scale-x-100',
						error && 'border-red-border'
					)}
				>
					<div className="ml-2 flex text-neutral-stroke-accessible-default">{contentBefore}</div>
					<input
						ref={ref}
						id={id}
						placeholder={label}
						required={required}
						className={twMerge(
							'w-full bg-transparent text-neutral-foreground outline-none',
							sizes[size]['input'],
							className
						)}
						{...props}
					/>
					<div className="mr-2 flex text-neutral-stroke-accessible-default">{contentAfter}</div>
				</div>
				{error && (
					<p className="mt-0.5 flex items-center gap-1 text-xs text-red-foreground">
						<ErrorIcon />
						{error.message}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';