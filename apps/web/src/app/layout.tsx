import { Noto_Sans } from '@next/font/google';

import { ClientToaster } from '@/components/ClientToaster';

import { AppProviders } from '@/providers/AppProviders';

import type { ReactNode } from 'react';

import '@/styles/globals.css';

const notoSans = Noto_Sans({
	weight: ['400', '500', '600', '700'],
	variable: '--font-noto-sans',
});

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en" className={notoSans.variable}>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
			<link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
		</head>
		<body>
			<AppProviders>{children}</AppProviders>
			<ClientToaster />
		</body>
	</html>
);

export default RootLayout;
