import { PrivateRoute } from '@/components/PrivateRoute';

import type { ReactNode } from 'react';

const EntryPageLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute loggedIn={false}>
		<main className="flex h-full items-center justify-center bg-gray-50 dark:bg-neutral-800">
			{children}
		</main>
	</PrivateRoute>
);

export default EntryPageLayout;
