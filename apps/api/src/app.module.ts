import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CONFIG_VALIDATION_SCHEMA } from './app.constants';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: {
				validate: (data: unknown) => {
					const parsedData = CONFIG_VALIDATION_SCHEMA.safeParse(data);

					return parsedData.success
						? {
								error: null,
								value: parsedData.data,
						  }
						: {
								error: parsedData.error,
								value: null,
						  };
				},
			},
		}),
		PrismaModule,
	],
})
export class AppModule {}
