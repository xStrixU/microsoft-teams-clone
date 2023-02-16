import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { CreateTeamDto } from './dto/create-team.dto';
import { TeamDto } from './dto/team.dto';
import { mapTeamToTeamDto } from './teams.mapper';
import { TeamsService } from './teams.service';

import { Auth } from '@/auth/auth.decorator';
import { AuthUser } from '@/auth/auth-user.decorator';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
	constructor(private readonly teamsService: TeamsService) {}

	@Post()
	@Auth()
	@ApiCreatedResponse({
		type: TeamDto,
		description: 'Team has been created',
	})
	async create(@Body() createTeamDto: CreateTeamDto, @AuthUser() user: User): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.create(createTeamDto, user));
	}
}
