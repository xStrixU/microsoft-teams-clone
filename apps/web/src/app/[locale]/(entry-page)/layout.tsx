import type { ReactNode } from 'react';

const EntryPageLayout = ({ children }: { readonly children: ReactNode }) => (
	<main className="h-full flex items-center justify-center bg-gray-50 dark:bg-neutral-800">
		{children}
	</main>
);

export default EntryPageLayout;
