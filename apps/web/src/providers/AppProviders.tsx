'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { ReactNode } from 'react';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { readonly children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools />
	</QueryClientProvider>
);
