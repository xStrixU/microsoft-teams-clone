'use client';

import { MessageGroup } from './MessageGroup';

import { useGetMessages } from '@/hooks/useGetMessages';
import { groupMessages } from '@/lib/messages';
import { useConversationContext } from '@/providers/ConversationProvider';

type MessagesProps = Readonly<{
	conversationId: string;
}>;

export const Messages = ({ conversationId }: MessagesProps) => {
	const { messages } = useConversationContext();
	const groupedMessages = groupMessages(messages);

	useGetMessages({ conversationId });

	return (
		<ul className="mx-auto mb-10 flex w-full flex-col-reverse gap-5 overflow-y-scroll pt-4 scrollbar scrollbar-thumb-neutral-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1.5">
			{groupedMessages.map((messageGroup, i) => (
				<li key={i}>
					<MessageGroup messageGroup={messageGroup} />
				</li>
			))}
		</ul>
	);
};
