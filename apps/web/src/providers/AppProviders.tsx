'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools />
	</QueryClientProvider>
);
