import { Header } from '@/components/Header/Header';
import { Navbar } from '@/components/Navbar';
import { PrivateRoute } from '@/components/PrivateRoute';

import type { ReactNode } from 'react';

const MainLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute>
		<Header />
		<div className="flex h-content">
			<Navbar />
			<main className="grow bg-neutral-background-hover dark:bg-neutral-background-pressed">
				{children}
			</main>
		</div>
	</PrivateRoute>
);

export default MainLayout;
