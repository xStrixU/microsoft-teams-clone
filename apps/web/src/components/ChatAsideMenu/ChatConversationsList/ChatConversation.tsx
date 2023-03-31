import { BaseChatConversation } from './BaseChatConversation';

import { ConversationImage } from '@/components/ConversationImage';

import { getConversationName } from '@/lib/conversations';

import type { Conversation } from '@/types';

type ChatConversationProps = Readonly<{
	conversation: Conversation;
	isActive: boolean;
}>;

export const ChatConversation = ({ conversation, isActive }: ChatConversationProps) => {
	const name = getConversationName(conversation);

	return (
		<BaseChatConversation
			image={<ConversationImage conversation={conversation} />}
			name={name}
			isActive={isActive}
		/>
	);
};
