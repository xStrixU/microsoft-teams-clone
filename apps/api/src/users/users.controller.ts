import { Body, Controller, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { I18n } from 'nestjs-i18n';

import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { mapUserToUserDto } from './users.mapper';
import { UsersService } from './users.service';

import { AppI18nContext } from '@/common/i18n/i18n.types';
import { OpenAPIHttpException } from '@/common/openapi/openapi-http-exception';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiCreatedResponse({
		type: UserDto,
		description: 'User has been created',
	})
	@ApiConflictResponse({
		type: OpenAPIHttpException,
		description: 'Email is already registered',
	})
	async create(
		@Body() createUserDto: CreateUserDto,
		@I18n() i18n: AppI18nContext
	): Promise<UserDto> {
		return mapUserToUserDto(await this.usersService.create(createUserDto, i18n));
	}
}
