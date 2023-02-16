import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CONFIG_VALIDATION_SCHEMA } from './app.constants';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { SessionsModule } from './sessions/sessions.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';

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
		DatabaseModule,
		AuthModule,
		UsersModule,
		SessionsModule,
		TeamsModule,
	],
})
export class AppModule {}
