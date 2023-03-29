'use client';

import Link from 'next/link';

import { ChatConversation } from './ChatConversation';
import { NewChatConversation } from './NewChatConversation';

import { useGetAllConversations } from '@/hooks/useGetAllConversations';
import { useConversationContext } from '@/providers/ConversationProvider';

export const ChatConversationsList = () => {
	const { conversationId } = useConversationContext();
	const { conversations } = useGetAllConversations();

	const isNewChat = conversationId === 'new';

	if (!conversations.length && !isNewChat) {
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
					<NewChatConversation />
				</li>
			)}
			{conversations.map(conversation => (
				<li key={conversation.id}>
					<Link href={`/chat/${conversation.id}`}>
						<ChatConversation
							conversation={conversation}
							isActive={conversation.id === conversationId}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
};
