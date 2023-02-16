import type { TeamDto } from './dto/team.dto';
import type { Team } from '@prisma/client';

export const mapTeamToTeamDto = ({ id, name, description }: Team): TeamDto => ({
	id,
	name,
	description,
});
