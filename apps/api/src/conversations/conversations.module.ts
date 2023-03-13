import { forwardRef, Module } from '@nestjs/common';

import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [ConversationsService],
	controllers: [ConversationsController],
	exports: [ConversationsService],
})
export class ConversationsModule {}
