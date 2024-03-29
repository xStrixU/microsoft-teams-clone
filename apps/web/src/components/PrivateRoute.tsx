'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import MicrosoftLogo from '@/assets/svg/microsoft-logo.svg';
import TeamsLogo from '@/assets/svg/teams-logo.svg';
import { useUser } from '@/hooks/useUser';

import type { ReactNode } from 'react';

type PrivateRouteProps = Readonly<{
	loggedIn?: boolean;
	children: ReactNode;
}>;

export const PrivateRoute = ({ loggedIn = true, children }: PrivateRouteProps) => {
	const router = useRouter();
	const { isLoading, user } = useUser();

	useEffect(() => {
		if (!isLoading && loggedIn !== Boolean(user)) {
			router.replace(loggedIn ? '/sign-in' : '/');
		}
	}, [isLoading, loggedIn, router, user]);

	if (isLoading || loggedIn !== Boolean(user)) {
		return (
			<main className="flex h-full flex-col items-center justify-center">
				<TeamsLogo className="h-36 w-36" />
				<MicrosoftLogo className="mt-2" />
			</main>
		);
	}

	return <>{children}</>;
};
