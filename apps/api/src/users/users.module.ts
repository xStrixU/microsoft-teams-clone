import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { ConversationsModule } from '@/conversations/conversations.module';
import { TeamsModule } from '@/teams/teams.module';

@Module({
	imports: [TeamsModule, ConversationsModule],
	providers: [UsersService],
	controllers: [UsersController],
	exports: [UsersService],
})
export class UsersModule {}
