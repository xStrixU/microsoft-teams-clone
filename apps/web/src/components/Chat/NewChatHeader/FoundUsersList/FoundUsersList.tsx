import { useEffect } from 'react';

import { FoundUser } from './FoundUser';

import { useGetUsers } from '@/hooks/useGetUsers';
import { useConversationContext } from '@/providers/ConversationProvider';

import type { FoundUser as FoundUserType } from '@/types';

type FoundUsersListProps = Readonly<{
	isChanging: boolean;
	value: string;
	handleFoundUserClick: (user: FoundUserType) => void;
}>;

export const FoundUsersList = ({
	isChanging,
	value,
	handleFoundUserClick,
}: FoundUsersListProps) => {
	const { users, refetchUsers, isLoading } = useGetUsers(value);
	const { selectedUsers } = useConversationContext();
	const filteredUsers = users?.filter(
		user => !selectedUsers.find(selectedUser => selectedUser.id === user.id)
	);

	useEffect(() => {
		if (!value) return;

		refetchUsers();
	}, [refetchUsers, value]);

	return (
		<ul className="absolute -bottom-0.5 left-0 w-full translate-y-full space-y-1 rounded border border-neutral-stroke-default bg-neutral-background-default p-1 text-xs shadow-md">
			{filteredUsers?.length && !isChanging ? (
				filteredUsers.map(user => (
					<li key={user.id}>
						<FoundUser user={user} handleClick={handleFoundUserClick} />
					</li>
				))
			) : (
				<li className="p-1">
					{isLoading || isChanging ? 'Loading...' : "We couldn't find any matches."}
				</li>
			)}
		</ul>
	);
};
