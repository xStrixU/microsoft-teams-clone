import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	createSession,
	deleteCurrentSession,
	getCurrentSession,
} from '@/services/sessions.service';
import { createUser } from '@/services/users.service';

import type { ApiResponse } from 'openapi-typescript-fetch';

import type { User } from '@/types';

const USER_QUERY_KEY = ['user'];

export const useUser = () => {
	const queryClient = useQueryClient();
	const { data: user, ...rest } = useQuery({
		queryKey: USER_QUERY_KEY,
		queryFn: async () => {
			try {
				const { data } = await getCurrentSession({});

				return data;
			} catch (err) {
				return null;
			}
		},
		staleTime: Infinity,
	});

	const setUser = (userResponse: ApiResponse<User> | null) => {
		queryClient.setQueryData(USER_QUERY_KEY, userResponse?.data ?? null);
	};

	const register = useMutation(createUser);
	const login = useMutation(createSession, {
		onSuccess: setUser,
	});
	const logout = useMutation(deleteCurrentSession, {
		onSuccess: () => {
			setUser(null);
		},
	});

	return { user, register, login, logout, ...rest };
};
