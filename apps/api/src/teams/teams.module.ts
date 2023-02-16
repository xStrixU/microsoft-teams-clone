import { forwardRef, Module } from '@nestjs/common';

import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [TeamsService],
	controllers: [TeamsController],
	exports: [TeamsService],
})
export class TeamsModule {}
