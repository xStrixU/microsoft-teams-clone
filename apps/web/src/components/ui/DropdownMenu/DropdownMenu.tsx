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

export const DropdownMenu = ({ fullHeight, children }: DropdownMenuProps) => (
	<Menu as="div" className={twMerge('relative', fullHeight && 'h-full')}>
		{children}
	</Menu>
);

DropdownMenu.Button = Menu.Button;
DropdownMenu.Divider = DropdownMenuDivider;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Items = DropdownMenuItems;
