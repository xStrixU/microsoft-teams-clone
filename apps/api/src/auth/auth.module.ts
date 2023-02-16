import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';

import { UsersModule } from '@/users/users.module';

@Module({
	imports: [UsersModule],
	providers: [AuthService],
	exports: [AuthService, UsersModule],
})
export class AuthModule {}
