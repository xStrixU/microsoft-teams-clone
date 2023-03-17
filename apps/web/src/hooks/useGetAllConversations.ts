import { useQuery } from '@tanstack/react-query';

import { getCurrentUserConversations } from '@/services/conversations.service';

export const useGetAllConversations = () => {
	const { data: conversations = [], ...rest } = useQuery({
		queryKey: ['conversations'],
		queryFn: async () => {
			const { data } = await getCurrentUserConversations({});

			return data;
		},
	});

	return { conversations, ...rest };
};
