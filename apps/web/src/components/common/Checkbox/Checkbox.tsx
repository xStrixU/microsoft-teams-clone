import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '~/icons/check.svg';
import CheckLargeIcon from '~/icons/check-large.svg';

const sizes = {
	medium: 'w-4 h-4',
	large: 'w-5 h-5',
} as const;

type CheckboxProps = Readonly<{
	size?: keyof typeof sizes;
	label?: string;
}> &
	Omit<JSX.IntrinsicElements['input'], 'size'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ size = 'medium', label, ...props }, ref) => (
		<label className="flex items-center gap-1.5 w-fit cursor-pointer group select-none text-sm text-neutral-stroke-accessible-hover">
			<label>
				<input ref={ref} type="checkbox" className="peer hidden" {...props} />
				<div
					className={twMerge(
						'rounded-sm border cursor-pointer border-neutral-stroke-accessible-default flex items-center justify-center text-neutral-foreground-inverted [&>svg]:hidden peer-checked:border-none peer-checked:bg-brand-default group-hover:peer-checked:bg-brand-hover peer-checked:[&>svg]:block',
						sizes[size]
					)}
				>
					{size === 'large' ? <CheckLargeIcon /> : <CheckIcon />}
				</div>
			</label>
			{label}
		</label>
	)
);

Checkbox.displayName = 'Checkbox';
