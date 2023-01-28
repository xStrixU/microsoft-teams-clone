import { Test } from '@nestjs/testing';

import { AppModule } from '@/app.module';
import { PrismaService } from '@/prisma/prisma.service';

export const createTestingModule = async () => {
	const moduleRef = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	const app = moduleRef.createNestApplication();

	await app.init();
	await moduleRef.get(PrismaService).truncateAllTables();

	return app;
};
