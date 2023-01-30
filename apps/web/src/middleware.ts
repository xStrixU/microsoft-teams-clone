import { createIntlMiddleware } from 'next-intl/server';

export default createIntlMiddleware();

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
