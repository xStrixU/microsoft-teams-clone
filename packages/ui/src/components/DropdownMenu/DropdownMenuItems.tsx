'use client';

import { Menu } from '@headlessui/react';

import type { ReactNode } from 'react';

type DropdownMenuItemsProps = Readonly<{
	children: ReactNode;
}>;

export const DropdownMenuItems = ({ children }: DropdownMenuItemsProps) => (
	<Menu.Items className="ui-absolute ui-right-0 ui-top-12 ui-z-10 ui-w-64 ui-rounded ui-border ui-border-zinc-200 ui-bg-neutral-background-default ui-py-2 ui-shadow-lg dark:ui-border-neutral-800">
		{children}
	</Menu.Items>
);
