import { getRequestConfig } from 'next-intl/server';

export const locales = ['en-US', 'pl'];
export const defaultLocale = 'en-US';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`/messages/${locale}.json`)).default,
}));
