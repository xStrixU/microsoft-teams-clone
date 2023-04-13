import ErrorIcon from '@/assets/icons/error.svg';
import { uiTwMerge } from '@/lib/uiTwMerge';

import type { ReactNode } from 'react';

export const ROOT_STYLES = 'ui-w-full ui-bg-transparent ui-text-neutral-foreground ui-outline-none';

const sizes = {
	small: 'ui-text-xs',
	medium: 'ui-text-sm',
	large: 'ui-text-base',
} as const;

type InputAppearanceProps = Readonly<{
	id: string;
	label?: string;
	required?: boolean;
	fill?: boolean;
	size?: keyof typeof sizes;
	error?: string;
	children: ReactNode;
}>;

export const InputAppearance = ({
	id,
	label,
	required,
	fill,
	size = 'medium',
	error,
	children,
}: InputAppearanceProps) => (
	<div className={uiTwMerge(sizes[size], fill && 'ui-w-full')}>
		{label && (
			<label htmlFor={id} className="ui-mb-1 ui-text-neutral-foreground">
				{label}
				{required && <span className="ui-ml-1 ui-text-red-foreground">*</span>}
			</label>
		)}
		<div
			className={uiTwMerge(
				'ui-relative ui-flex ui-items-center ui-rounded ui-border ui-border-neutral-stroke-default ui-border-b-neutral-stroke-accessible-default ui-bg-neutral-background-default ui-transition-colors focus-within:ui-border-neutral-stroke-pressed focus-within:ui-border-b-neutral-stroke-accessible-default hover:ui-border-neutral-stroke-hover hover:ui-border-b-neutral-stroke-accessible-default',
				'after:ui-clip-path-input-underline after:ui-absolute after:-ui-bottom-px after:-ui-left-px after:-ui-right-px after:ui-h-1 after:ui-scale-x-0 after:ui-rounded-b after:ui-border-b-2 after:ui-border-b-brand-default after:ui-transition-transform after:ui-duration-200 focus-within:after:ui-scale-x-100',
				error && 'ui-border-red-border'
			)}
		>
			{children}
		</div>
		{error && (
			<p className="ui-mt-0.5 ui-flex ui-items-center ui-gap-1 ui-text-xs ui-text-red-foreground">
				<ErrorIcon />
				{error}
			</p>
		)}
	</div>
);
