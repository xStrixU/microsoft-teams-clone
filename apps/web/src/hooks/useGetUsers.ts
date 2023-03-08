import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { getUsers } from '@/services/users.service';

const QUERY_KEY = ['found-users'];

export const useGetUsers = (search: string) => {
	const queryClient = useQueryClient();
	const {
		data: users,
		refetch,
		...rest
	} = useQuery({
		queryKey: QUERY_KEY,
		queryFn: async () => {
			const { data } = await getUsers({ search });

			return data;
		},
		enabled: false,
	});

	const refetchUsers = useCallback(() => {
		queryClient.resetQueries(QUERY_KEY);
		refetch();
	}, [queryClient, refetch]);

	return { users, refetchUsers, ...rest };
};
