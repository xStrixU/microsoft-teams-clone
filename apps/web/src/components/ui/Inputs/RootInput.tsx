import { twMerge } from 'tailwind-merge';

import ErrorIcon from '@/assets/icons/error.svg';

import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

export const ROOT_STYLES = 'w-full bg-transparent text-neutral-foreground outline-none';

const sizes = {
	small: 'text-xs',
	medium: 'text-sm',
	large: 'text-base',
} as const;

type RootInputProps = Readonly<{
	id: string;
	label?: string;
	required?: boolean;
	fill?: boolean;
	size?: keyof typeof sizes;
	error?: FieldError;
	children: ReactNode;
}>;

export const RootInput = ({
	id,
	label,
	required,
	fill,
	size = 'medium',
	error,
	children,
}: RootInputProps) => (
	<div className={twMerge(sizes[size], fill && 'w-full')}>
		{label && (
			<label htmlFor={id} className="mb-1 text-neutral-foreground">
				{label}
				{required && <span className="ml-1 text-red-foreground">*</span>}
			</label>
		)}
		<div
			className={twMerge(
				'relative flex items-center rounded border border-neutral-stroke-default border-b-neutral-stroke-accessible-default bg-neutral-background-default transition-colors focus-within:border-neutral-stroke-pressed focus-within:border-b-neutral-stroke-accessible-default hover:border-neutral-stroke-hover hover:border-b-neutral-stroke-accessible-default',
				'after:clip-path-input-underline after:absolute after:-bottom-px after:-left-px after:-right-px after:h-1 after:scale-x-0 after:rounded-b after:border-b-2 after:border-b-brand-default after:transition-transform after:duration-200 focus-within:after:scale-x-100',
				error && 'border-red-border'
			)}
		>
			{children}
		</div>
		{error && (
			<p className="mt-0.5 flex items-center gap-1 text-xs text-red-foreground">
				<ErrorIcon />
				{error.message}
			</p>
		)}
	</div>
);
