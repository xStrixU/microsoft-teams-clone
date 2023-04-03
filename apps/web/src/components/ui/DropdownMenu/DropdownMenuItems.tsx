import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownMenuItemsProps = Readonly<{
	className?: string;
	children: ReactNode;
}>;

export const DropdownMenuItems = ({ className, children }: DropdownMenuItemsProps) => (
	<Menu.Items
		className={twMerge(
			'absolute right-0 top-12 z-10 w-56 rounded border border-zinc-200 bg-neutral-background-default py-2 shadow-lg dark:border-neutral-800',
			className
		)}
	>
		{children}
	</Menu.Items>
);
