import { UserAvatar } from './UserAvatar';

import NewChatIcon from '@/assets/icons/new-chat.svg';

import type { Conversation } from '@/types';

type ConversationImageProps = Readonly<{
	conversation: Conversation;
}>;

export const ConversationImage = ({ conversation }: ConversationImageProps) =>
	conversation.user ? (
		<UserAvatar user={conversation.user} />
	) : (
		<NewChatIcon className="rounded-full text-neutral-foreground-inverted" />
	);
