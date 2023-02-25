import { Body, Controller, Delete, Get, HttpStatus, Post, Res, Session } from '@nestjs/common';
import {
	ApiCreatedResponse,
	ApiNoContentResponse,
	ApiOkResponse,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Response } from 'express';
import { Session as ExpressSession } from 'express-session';

import { CreateSessionDto } from './dto/create-session.dto';
import { SESSION_COOKIE_NAME } from './sessions.constants';
import { SessionsService } from './sessions.service';

import { Auth } from '@/auth/auth.decorator';
import { AuthUser } from '@/auth/auth-user.decorator';
import { OpenAPIHttpException } from '@/common/openapi/openapi-http-exception';
import { UserDto } from '@/users/dto/user.dto';
import { mapUserToUserDto } from '@/users/users.mapper';

@ApiTags('sessions')
@Controller('sessions')
export class SessionsController {
	constructor(private readonly sessionsService: SessionsService) {}

	@Post()
	@ApiCreatedResponse({
		type: UserDto,
		description: 'Session has been created',
	})
	@ApiUnauthorizedResponse({
		type: OpenAPIHttpException,
		description: 'Invalid email or password',
	})
	async create(
		@Body() createSessionDto: CreateSessionDto,
		@Session() session: ExpressSession
	): Promise<UserDto> {
		return mapUserToUserDto(await this.sessionsService.create(createSessionDto, session));
	}

	@Get('me')
	@Auth()
	@ApiOkResponse({
		type: UserDto,
		description: 'Returns the user associated with the current session',
	})
	getCurrent(@AuthUser() user: User): UserDto {
		return mapUserToUserDto(user);
	}

	@Delete('me')
	@ApiNoContentResponse({
		description: 'The current session has been created',
	})
	async deleteCurrent(
		@Res({ passthrough: true }) response: Response,
		@Session() session: ExpressSession
	): Promise<void> {
		await new Promise<void>((resolve, reject) => {
			session.destroy(err => {
				if (err) {
					return reject(err);
				}

				response.clearCookie(SESSION_COOKIE_NAME);
				response.status(HttpStatus.NO_CONTENT);

				resolve();
			});
		});
	}
}
