import { uiTwMerge } from '@/lib/uiTwMerge';

import type { ElementType } from 'react';

import type { OverridableProps } from '@/types/components';

const DEFAULT_TAG = 'button';

const sizes = {
	small: 'ui-h-7 ui-min-w-[64px] ui-text-xs ui-font-normal',
	medium: 'ui-h-9 ui-min-w-[96px] ui-text-sm',
	large: 'ui-h-11 ui-min-w-[96px] ui-text-base',
	icon: 'ui-h-7 ui-w-7 ui-p-0',
} as const;

const shapes = {
	rounded: 'ui-rounded',
	circular: 'ui-rounded-full',
	square: 'ui-rounded-none',
} as const;

const appearances = {
	default:
		'ui-border ui-border-neutral-stroke-default ui-bg-neutral-background-default ui-text-neutral-foreground hover:ui-bg-neutral-background-hover hover:ui-border-neutral-stroke-hover active:ui-bg-neutral-background-pressed active:ui-border-neutral-stroke-pressed',
	primary: 'ui-text-white ui-bg-brand-default hover:ui-bg-brand-hover active:ui-bg-brand-pressed',
} as const;

type ButtonProps<TTag extends ElementType> = Readonly<{
	size?: keyof typeof sizes;
	shape?: keyof typeof shapes;
	appearance?: keyof typeof appearances;
	fontBold?: boolean;
	fill?: boolean;
}> &
	OverridableProps<TTag>;

export const Button = <TTag extends ElementType>({
	as,
	size = 'medium',
	shape = 'rounded',
	appearance = 'default',
	fontBold,
	fill,
	...props
}: ButtonProps<TTag>) => {
	const Tag = as ?? DEFAULT_TAG;

	return (
		<Tag
			className={uiTwMerge(
				'ui-flex ui-w-fit ui-items-center ui-justify-center ui-px-5 ui-font-semibold ui-transition-colors disabled:ui-cursor-not-allowed disabled:ui-border-neutral-stroke-disabled disabled:ui-bg-neutral-background-disabled disabled:ui-text-neutral-foreground-disabled',
				sizes[size],
				shapes[shape],
				appearances[appearance],
				size === 'icon' && 'ui-flex ui-items-center ui-justify-center',
				fill && 'ui-w-full',
				fontBold && 'ui-font-bold'
			)}
			{...(Tag === 'button' && { type: 'button' })}
			{...props}
		/>
	);
};
