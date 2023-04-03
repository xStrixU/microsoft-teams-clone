import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { redisProvider } from './redis.provider';

@Global()
@Module({
	providers: [PrismaService, redisProvider],
	exports: [PrismaService, redisProvider],
})
export class DatabaseModule {}
