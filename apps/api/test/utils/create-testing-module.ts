import { Test } from '@nestjs/testing';

import { AppModule } from '@/app.module';
import { setupApp } from '@/common/setups/app.setup';
import { PrismaService } from '@/database/prisma/prisma.service';

export const createTestingModule = async () => {
	const moduleRef = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	const app = moduleRef.createNestApplication();

	setupApp(app);

	await app.init();
	await moduleRef.get(PrismaService).truncateAllTables();

	return app;
};
