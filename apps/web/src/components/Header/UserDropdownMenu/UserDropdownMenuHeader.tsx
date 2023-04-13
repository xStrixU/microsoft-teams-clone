import { UserAvatar } from '@/components/UserAvatar';

import type { User } from '@/types';

type UserDropdownMenuHeaderProps = Readonly<{
	user: User;
}>;

export const UserDropdownMenuHeader = ({ user }: UserDropdownMenuHeaderProps) => (
	<div className="flex px-5 py-1.5">
		<UserAvatar user={user} size={56} badge={{ status: 'available' }} className="shrink-0" />
		<div className="ml-3 grow overflow-hidden">
			<p className="truncate text-sm font-bold text-neutral-foreground">{user.fullName}</p>
			<p className="truncate text-xs text-neutral-stroke-accessible-default">{user.email}</p>
		</div>
	</div>
);
