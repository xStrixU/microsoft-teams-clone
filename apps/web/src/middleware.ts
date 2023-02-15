import createIntlMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './i18n';

export default createIntlMiddleware({
	locales,
	defaultLocale,
});

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
