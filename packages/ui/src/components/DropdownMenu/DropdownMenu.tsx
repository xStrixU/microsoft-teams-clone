'use client';

import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { DropdownMenuDivider } from './DropdownMenuDivider';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuItems } from './DropdownMenuItems';

import type { ReactNode } from 'react';

type DropdownMenuProps = Readonly<{
	fullHeight?: boolean;
	children: ReactNode;
}>;

export type DropdownMenuType = React.FC<DropdownMenuProps> & {
	Button: typeof Menu.Button;
	Divider: typeof DropdownMenuDivider;
	Item: typeof DropdownMenuItem;
	Items: typeof DropdownMenuItems;
};

export const DropdownMenu: DropdownMenuType = ({ fullHeight, children }: DropdownMenuProps) => (
	<Menu as="div" className={twMerge('ui-relative ui-w-fit', fullHeight && 'ui-h-full')}>
		{children}
	</Menu>
);

DropdownMenu.Button = Menu.Button;
DropdownMenu.Divider = DropdownMenuDivider;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Items = DropdownMenuItems;
