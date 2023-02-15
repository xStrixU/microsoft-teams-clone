import { Body, Controller, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { mapUserToUserDto } from './users.mapper';
import { UsersService } from './users.service';

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
	async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return mapUserToUserDto(await this.usersService.create(createUserDto));
	}
}
