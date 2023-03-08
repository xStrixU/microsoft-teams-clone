import { Noto_Sans } from 'next/font/google';

import { ClientToaster } from '@/components/ClientToaster';

import { APP_NAME } from '@/lib/constants';
import { AppProviders } from '@/providers/AppProviders';

import type { ReactNode } from 'react';

import '@/styles/globals.css';

const notoSans = Noto_Sans({
	weight: ['400', '500', '600', '700'],
	variable: '--font-noto-sans',
});

export const metadata = {
	title: {
		default: APP_NAME,
		template: `%s | ${APP_NAME}`,
	},
	description: `${APP_NAME} - Workspace for real-time collaboration and communication, meetings, file and app sharing, and even the occasional emoji!`,
	icons: {
		icon: [
			{ url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
			{ url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
			{ url: '/favicons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
		],
		shortcut: { url: '/favicons/favicon.ico', type: 'image/x-icon' },
	},
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en" className={notoSans.variable}>
		<body>
			<AppProviders>{children}</AppProviders>
			<ClientToaster />
		</body>
	</html>
);

export default RootLayout;
