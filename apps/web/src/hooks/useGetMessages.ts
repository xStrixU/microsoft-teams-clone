import { useQuery } from '@tanstack/react-query';

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
	const { data: messages = [], ...rest } = useQuery({
		queryKey: ['messages', conversationId, limit, before],
		queryFn: async () => {
			const { data } = await getMessages({
				id: conversationId,
				limit,
				before,
			});

			return data;
		},
	});

	return { messages, ...rest };
};
