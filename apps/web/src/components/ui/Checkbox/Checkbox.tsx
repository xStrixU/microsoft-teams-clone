import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/assets/icons/check.svg';
import CheckLargeIcon from '@/assets/icons/check-large.svg';

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
		<label className="group flex w-fit cursor-pointer select-none items-center gap-1.5 text-sm text-neutral-stroke-accessible-hover">
			<label>
				<input ref={ref} type="checkbox" className="peer hidden" {...props} />
				<div
					className={twMerge(
						'flex cursor-pointer items-center justify-center rounded-sm border border-neutral-stroke-accessible-default text-neutral-foreground-inverted peer-checked:border-none peer-checked:bg-brand-default group-hover:peer-checked:bg-brand-hover [&>svg]:hidden peer-checked:[&>svg]:block',
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
