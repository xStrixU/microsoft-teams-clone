'use client';

import { Fragment } from 'react';

import { UserDropdownMenuHeader } from './UserDropdownMenuHeader';

import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';

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
			<DropdownMenu.Items className="w-64">
				<UserDropdownMenuHeader user={user} />
				<DropdownMenu.Divider />
				<DropdownMenu.Item onClick={() => logout.mutate({})}>Sign out</DropdownMenu.Item>
			</DropdownMenu.Items>
		</DropdownMenu>
	);
};
