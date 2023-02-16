import { Injectable } from '@nestjs/common';
import { TeamMemberRole } from '@prisma/client';

import { PrismaService } from '@/database/prisma/prisma.service';

import type { CreateTeamDto } from './dto/create-team.dto';
import type { Prisma, Team, User } from '@prisma/client';

@Injectable()
export class TeamsService {
	constructor(private readonly prisma: PrismaService) {}

	async create({ name, description }: CreateTeamDto, user: User): Promise<Team> {
		const team = await this.prisma.team.create({
			data: {
				name,
				description,
				members: {
					create: [
						{
							memberId: user.id,
							role: TeamMemberRole.OWNER,
						},
					],
				},
			},
		});

		return team;
	}

	findAllBy(where: Prisma.TeamWhereInput): Promise<Team[]> {
		return this.prisma.team.findMany({ where });
	}
}
