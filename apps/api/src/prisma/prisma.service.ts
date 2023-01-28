import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	async onModuleInit() {
		await this.$connect();
	}

	async onModuleDestroy() {
		await this.$disconnect();
	}

	async truncateAllTables() {
		const tableNames = await this.$queryRawUnsafe<{ tablename: string }[]>(
			"SELECT tablename FROM pg_tables WHERE schemaname='public'"
		);

		tableNames.forEach(async ({ tablename }) => {
			if (tablename === '_prisma_migrations') return;

			try {
				await this.$executeRawUnsafe(`TRUNCATE TABLE "public"."${tablename}" CASCADE;`);
			} catch (err) {
				console.error(err);
			}
		});
	}
}
