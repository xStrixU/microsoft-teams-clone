import { forwardRef } from 'react';

import CheckIcon from '@/assets/icons/check.svg';
import CheckLargeIcon from '@/assets/icons/check-large.svg';
import { uiTwMerge } from '@/lib/uiTwMerge';

const sizes = {
	medium: 'ui-w-4 ui-h-4',
	large: 'ui-w-5 ui-h-5',
} as const;

type CheckboxProps = Readonly<{
	size?: keyof typeof sizes;
	label?: string;
}>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ size = 'medium', label, ...props }, ref) => (
		<label className="ui-group ui-flex ui-w-fit ui-cursor-pointer ui-select-none ui-items-center ui-gap-1.5 ui-text-sm ui-text-neutral-stroke-accessible-hover">
			<label>
				<input ref={ref} type="checkbox" className="ui-peer ui-hidden" {...props} />
				<div
					className={uiTwMerge(
						'ui-flex ui-cursor-pointer ui-items-center ui-justify-center ui-rounded-sm ui-border ui-border-neutral-stroke-accessible-default ui-text-neutral-foreground-inverted peer-checked:ui-border-none peer-checked:ui-bg-brand-default group-hover:peer-checked:ui-bg-brand-hover [&>svg]:ui-hidden peer-checked:[&>svg]:ui-block',
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
