import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { FoundUserDto } from './dto/found-user.dto';
import { GetUsersQueryDto } from './dto/get-users-query.dto';
import { UserDto } from './dto/user.dto';
import { mapUserToFoundUserDto, mapUserToUserDto } from './users.mapper';
import { UsersService } from './users.service';

import { Auth } from '@/auth/auth.decorator';
import { AuthUser } from '@/auth/auth-user.decorator';
import { OpenAPIHttpException } from '@/common/openapi/openapi-http-exception';
import { mapAppConversationToConversationDto } from '@/conversations/conversations.mapper';
import { ConversationsService } from '@/conversations/conversations.service';
import { ConversationDto } from '@/conversations/dto/conversation.dto';
import { TeamDto } from '@/teams/dto/team.dto';
import { mapTeamToTeamDto } from '@/teams/teams.mapper';
import { TeamsService } from '@/teams/teams.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly teamsService: TeamsService,
		private readonly conversationsService: ConversationsService
	) {}

	@Post()
	@ApiCreatedResponse({
		type: UserDto,
		description: 'User has been created',
	})
	@ApiConflictResponse({
		type: OpenAPIHttpException,
		description: 'Email is already registered',
	})
	async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return mapUserToUserDto(await this.usersService.create(createUserDto));
	}

	@Get()
	@Auth()
	@ApiOkResponse({
		type: [FoundUserDto],
		description: 'Returns found users',
	})
	async getUsers(
		@Query() getUsersQueryDto: GetUsersQueryDto,
		@AuthUser() user: User
	): Promise<FoundUserDto[]> {
		const users = await this.usersService.getUsers(getUsersQueryDto, user);

		return users.map(mapUserToFoundUserDto);
	}

	@Get('me/teams')
	@Auth()
	@ApiOkResponse({
		type: [TeamDto],
		description: "Returns a list of the current user's teams",
	})
	async findAllTeams(@AuthUser() user: User): Promise<TeamDto[]> {
		const teams = await this.teamsService.findAllBy({
			members: {
				some: {
					memberId: user.id,
				},
			},
		});

		return teams.map(mapTeamToTeamDto);
	}

	@Get('me/conversations')
	@Auth()
	@ApiOkResponse({
		type: [ConversationDto],
		description: "Returns a list of the current user's conversations",
	})
	async findAllConversations(@AuthUser() user: User): Promise<ConversationDto[]> {
		const conversations = await this.conversationsService.findAllBy(
			{
				members: {
					some: {
						memberId: user.id,
					},
				},
			},
			user
		);

		return conversations.map(mapAppConversationToConversationDto);
	}
}
