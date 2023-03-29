import CloseIcon from '~/icons/close.svg';

import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

import { useConversationContext } from '@/providers/ConversationProvider';

import type { FoundUser } from '@/types';

type SelectedUserProps = Readonly<{
	user: FoundUser;
}>;

export const SelectedUser = ({ user }: SelectedUserProps) => {
	const { removeSelectedUser } = useConversationContext();

	return (
		<div className="flex h-8 cursor-pointer items-center rounded-full bg-neutral-background-disabled pr-3.5 hover:bg-neutral-background-selected">
			<UserAvatar user={user} />
			<span className="ml-2">{user.fullName}</span>
			<button onClick={() => removeSelectedUser(user)} className="ml-1.5">
				<CloseIcon className="hover:fill-icon hover:text-brand-default" />
			</button>
		</div>
	);
};
