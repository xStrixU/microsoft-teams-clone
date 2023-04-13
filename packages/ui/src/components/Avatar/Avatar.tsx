import { AvatarBadge } from './AvatarBadge';

import { uiTwMerge } from '@/lib/uiTwMerge';
import { getInitials } from '@/lib/utils';

import type { ComponentProps } from 'react';

const sizes = {
	16: 'ui-h-4 ui-w-4 ui-text-[0.625rem]',
	20: 'ui-h-5 ui-w-5 ui-text-[0.625rem]',
	24: 'ui-h-6 ui-w-6 ui-text-[0.625rem]',
	28: 'ui-h-7 ui-w-7 ui-text-xs',
	32: 'ui-h-8 ui-w-8 ui-text-sm',
	36: 'ui-h-9 ui-w-9 ui-text-sm',
	40: 'ui-h-10 ui-w-10 ui-text-sm',
	48: 'ui-h-12 ui-w-12 ui-text-base',
	56: 'ui-h-14 ui-w-14 ui-text-xl',
	64: 'ui-h-16 ui-w-16 ui-text-xl',
	72: 'ui-h-[4.5rem] ui-w-[4.5rem] ui-text-xl',
	96: 'ui-h-24 ui-w-24 ui-text-xl',
	120: 'ui-h-[7.5rem] ui-w-[7.5rem] ui-text-2xl',
	128: 'ui-h-32 ui-w-32 ui-text-2xl',
} as const;

type AvatarProps = Readonly<{
	shrink?: boolean;
	size?: keyof typeof sizes;
	badge?: Omit<ComponentProps<typeof AvatarBadge>, 'size'>;
}> &
	({ name: string } | { image: string; alt: string });

export const Avatar = ({ shrink = true, size = 32, badge, ...props }: AvatarProps) => (
	<div
		className={uiTwMerge(
			'ui-relative ui-flex ui-h-10 ui-w-10 ui-select-none ui-items-center ui-justify-center ui-rounded-full ui-bg-red-200 ui-text-sm ui-font-medium ui-text-red-700',
			sizes[size],
			!shrink && 'ui-shrink-0'
		)}
	>
		{'name' in props ? (
			getInitials(props.name)
		) : (
			<img
				src={props.image}
				alt={props.alt}
				className="ui-object-cover ui-rounded-full ui-w-full ui-h-full"
			/>
		)}
		{badge && <AvatarBadge size={size} {...badge} />}
	</div>
);
