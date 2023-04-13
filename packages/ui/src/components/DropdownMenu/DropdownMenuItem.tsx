'use client';

import { Menu } from '@headlessui/react';

import { uiTwMerge } from '@/lib/uiTwMerge';

import type { ElementType, ReactElement, ReactNode } from 'react';

import type { OverridableProps } from '@/types/components';

const DEFAULT_TAG = 'button';

type DropdownMenuItemProps<TTag extends ElementType> = Readonly<{
	icon?: ReactElement;
	children: ReactNode;
}> &
	OverridableProps<TTag>;

export const DropdownMenuItem = <TTag extends ElementType = typeof DEFAULT_TAG>({
	as,
	icon,
	children,
	...props
}: DropdownMenuItemProps<TTag>) => {
	const Tag = as ?? DEFAULT_TAG;

	return (
		<Menu.Item>
			{({ active }) => (
				<Tag
					className={uiTwMerge(
						'ui-flex ui-w-full ui-items-center ui-px-5 ui-py-1.5 ui-text-left ui-text-neutral-foreground-2-default active:ui-bg-zinc-300 dark:ui-active:bg-neutral-700',
						active && 'ui-bg-zinc-200 ui-text-neutral-foreground-2-action dark:ui-bg-neutral-700'
					)}
					{...props}
				>
					{icon}
					<span className="ui-text-sm">{children}</span>
				</Tag>
			)}
		</Menu.Item>
	);
};
