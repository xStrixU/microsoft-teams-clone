'use client';

import { Fragment } from 'react';
import { DropdownMenu } from 'ui';

import { UserDropdownMenuHeader } from './UserDropdownMenuHeader';

import { useUser } from '@/hooks/useUser';

import type { ReactNode } from 'react';

type UserDropdownMenuProps = Readonly<{
	children: ReactNode;
}>;

export const UserDropdownMenu = ({ children }: UserDropdownMenuProps) => {
	const { user, logout } = useUser();

	if (!user) return null;

	return (
		<DropdownMenu fullHeight>
			<DropdownMenu.Button as={Fragment}>{children}</DropdownMenu.Button>
			<DropdownMenu.Items>
				<UserDropdownMenuHeader user={user} />
				<DropdownMenu.Divider />
				<DropdownMenu.Item onClick={() => logout.mutate({})}>Sign out</DropdownMenu.Item>
			</DropdownMenu.Items>
		</DropdownMenu>
	);
};
