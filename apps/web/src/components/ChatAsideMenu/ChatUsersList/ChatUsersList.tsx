import { ChatUser } from './ChatUser';

type ChatUsersListProps = Readonly<{
	isNewChat: boolean;
}>;

export const ChatUsersList = ({ isNewChat }: ChatUsersListProps) => {
	if (!isNewChat) {
		return (
			<p className="p-3 text-sm text-neutral-600 dark:text-neutral-400">
				Start a new private conversation here.
			</p>
		);
	}

	return (
		<ul className="space-y-px p-1">
			{isNewChat && (
				<li>
					<ChatUser name="New chat" isActive />
				</li>
			)}
		</ul>
	);
};
