import { BaseChatConversation } from './BaseChatConversation';

import NewChatIcon from '~/icons/new-chat.svg';

import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

import type { Conversation } from '@/types';

type ChatConversationProps = Readonly<{
	conversation: Conversation;
	isActive: boolean;
}>;

export const ChatConversation = ({ conversation, isActive }: ChatConversationProps) => {
	const image = conversation.user ? (
		<UserAvatar user={conversation.user} />
	) : (
		<NewChatIcon className="rounded-full text-neutral-foreground-inverted" />
	);
	const name = conversation.user ? conversation.user.fullName : conversation.name ?? '';

	return <BaseChatConversation image={image} name={name} isActive={isActive} />;
};
