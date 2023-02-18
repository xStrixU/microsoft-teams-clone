import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import * as teamsService from '@/services/teams.service';

const TEAMS_QUERY_KEY = ['teams'];

export const useTeams = () => {
	const queryClient = useQueryClient();
	const { data: teams = [], ...rest } = useQuery({
		queryKey: TEAMS_QUERY_KEY,
		queryFn: async () => {
			try {
				const { data } = await teamsService.getCurrentUserTeams({});

				return data;
			} catch (err) {
				return [];
			}
		},
		staleTime: Infinity,
	});

	const refetchTeams = () =>
		queryClient.refetchQueries({
			queryKey: TEAMS_QUERY_KEY,
		});

	const createTeam = useMutation(teamsService.createTeam, {
		onSuccess: refetchTeams,
	});

	return { teams, createTeam, ...rest };
};
