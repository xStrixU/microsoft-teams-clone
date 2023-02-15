'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextIntlClientProvider } from 'next-intl';

import type { AbstractIntlMessages } from 'next-intl';
import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	locale: string;
	messages: AbstractIntlMessages;
	children: ReactNode;
}>;

const queryClient = new QueryClient();

export const AppProviders = ({ locale, messages, children }: AppProvidersProps) => (
	<NextIntlClientProvider locale={locale} messages={messages}>
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	</NextIntlClientProvider>
);
