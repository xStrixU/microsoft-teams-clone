import { Header } from '@/components/Header/Header';
import { Navbar } from '@/components/Navbar';
import { PrivateRoute } from '@/components/PrivateRoute';

import type { ReactNode } from 'react';

const MainLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute>
		<div className="flex h-full flex-col">
			<Header />
			<div className="flex grow">
				<Navbar />
				<main className="grow bg-neutral-background-default">{children}</main>
			</div>
		</div>
	</PrivateRoute>
);

export default MainLayout;
