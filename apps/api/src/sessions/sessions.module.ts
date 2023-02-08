import { Module } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { RedisSessionStore } from './redis-session.store';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

import { UsersModule } from '@/users/users.module';

@Module({
	imports: [UsersModule],
	providers: [SessionsService, AuthService, RedisSessionStore],
	controllers: [SessionsController],
})
export class SessionsModule {}
