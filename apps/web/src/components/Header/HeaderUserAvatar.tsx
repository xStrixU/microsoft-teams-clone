'use client';

import { DropdownMenu } from '../ui/DropdownMenu/DropdownMenu';
import { UserAvatar } from '../UserAvatar/UserAvatar';

import { useUser } from '@/hooks/useUser';

export const HeaderUserAvatar = () => {
	const { user, logout } = useUser();

	if (!user) return null;

	return (
		<DropdownMenu className="h-full">
			<DropdownMenu.Target>
				<button className="flex h-full w-12 items-center justify-center hover:bg-brand-default active:bg-brand-pressed dark:hover:bg-neutral-foreground-inverted dark:active:bg-zinc-900">
					<UserAvatar
						user={user}
						badge={{
							status: 'available',
							className: 'border-brand-selected dark:border-neutral-background-5',
						}}
					/>
				</button>
			</DropdownMenu.Target>
			<DropdownMenu.Content className="w-64">
				<div className="flex px-5 py-1.5">
					<UserAvatar user={user} size={56} badge={{ status: 'available' }} className="shrink-0" />
					<div className="ml-3 grow overflow-hidden">
						<p className="truncate text-sm font-bold text-neutral-foreground">{user.fullName}</p>
						<p className="truncate text-xs text-neutral-stroke-accessible-default">{user.email}</p>
					</div>
				</div>
				<DropdownMenu.Divider />
				<DropdownMenu.Item onClick={() => logout.mutate({})}>Sign out</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu>
	);
};
