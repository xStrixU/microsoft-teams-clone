import { forwardRef, Module } from '@nestjs/common';

import { ConversationsController } from './conversations.controller';
import { ConversationsGateway } from './conversations.gateway';
import { ConversationsService } from './conversations.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [ConversationsService, ConversationsGateway],
	controllers: [ConversationsController],
	exports: [ConversationsService],
})
export class ConversationsModule {}
