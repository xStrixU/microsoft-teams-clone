'use client';

import { UserTeam } from './UserTeam';

import { useTeams } from '@/hooks/useTeams';

export const UserTeamsList = () => {
	const { teams } = useTeams();

	return (
		<ul className="mt-5 flex flex-wrap gap-3 px-6 py-4">
			{teams.map(team => (
				<li key={team.id}>
					<UserTeam team={team} />
				</li>
			))}
		</ul>
	);
};
