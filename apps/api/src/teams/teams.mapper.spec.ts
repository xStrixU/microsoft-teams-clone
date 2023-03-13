import { describe, expect, it } from 'vitest';

import { mapTeamToTeamDto } from './teams.mapper';

import type { TeamDto } from './dto/team.dto';
import type { Team } from '@prisma/client';

describe('teams.mapper', () => {
	it('should map Team to TeamDto', () => {
		const team: Team = {
			id: 1,
			name: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		};
		const teamDto: TeamDto = {
			id: team.id,
			name: team.name,
			description: team.description,
		};

		expect(mapTeamToTeamDto(team)).toStrictEqual(teamDto);
	});
});
