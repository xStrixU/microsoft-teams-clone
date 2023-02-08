import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AcceptLanguageResolver, CookieResolver, I18nModule } from 'nestjs-i18n';
import path from 'node:path';

import { CONFIG_VALIDATION_SCHEMA } from './app.constants';
import { DatabaseModule } from './database/database.module';
import { SessionsModule } from './sessions/sessions.module';
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
		I18nModule.forRoot({
			fallbackLanguage: 'en-US',
			loaderOptions: {
				path: path.join(__dirname, 'common', 'i18n', 'messages'),
				watch: true,
			},
			typesOutputPath: path.join(__dirname, '..', 'src', 'common', 'i18n', 'i18n.generated.ts'),
			resolvers: [new CookieResolver(['NEXT_LOCALE']), AcceptLanguageResolver],
		}),
		DatabaseModule,
		UsersModule,
		SessionsModule,
	],
})
export class AppModule {}
