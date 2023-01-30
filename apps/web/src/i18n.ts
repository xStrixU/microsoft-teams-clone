import type { NextIntlConfig } from 'next-intl';

const config: NextIntlConfig = {
	locales: ['en-US', 'pl'],
	defaultLocale: 'en-US',
	async getMessages({ locale }) {
		return (await import(`/messages/${locale}.json`)).default;
	},
};

export default config;
