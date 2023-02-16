import { Module } from '@nestjs/common';

import { RedisSessionStore } from './redis-session.store';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [AuthModule],
	providers: [SessionsService, RedisSessionStore],
	controllers: [SessionsController],
})
export class SessionsModule {}
