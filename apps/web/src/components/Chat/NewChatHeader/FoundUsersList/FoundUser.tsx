import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

import type { FoundUser as FoundUserType } from '@/types';

type FoundUserProps = Readonly<{
	user: FoundUserType;
	handleClick: (user: FoundUserType) => void;
}>;

export const FoundUser = ({ user, handleClick }: FoundUserProps) => (
	<div
		onClick={() => handleClick(user)}
		className="flex h-12 cursor-pointer items-center rounded-sm bg-neutral-background-selected px-3.5"
	>
		<UserAvatar user={user} />
		<span className="ml-2 truncate font-semibold">{user.fullName}</span>
	</div>
);
