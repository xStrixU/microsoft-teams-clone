import { UserAvatar } from './UserAvatar/UserAvatar';

import NewChatIcon from '~/icons/new-chat.svg';

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
