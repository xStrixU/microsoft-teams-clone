import { useQuery } from '@tanstack/react-query';

import { useConversationContext } from '@/providers/ConversationProvider';
import { getMessages } from '@/services/conversations.service';

export const useGetMessages = ({
	conversationId,
	limit,
	before,
}: {
	conversationId: string;
	limit?: number;
	before?: number;
}) => {
	const { addMessages } = useConversationContext();
	const query = useQuery({
		queryKey: ['messages', conversationId],
		queryFn: async () => {
			const { data } = await getMessages({
				id: conversationId,
				limit,
				before,
			});

			return data;
		},
		onSuccess: addMessages,
	});

	return query;
};
