'use client';

import { useLocalizedRouter } from 'next-intl/client';
import { useEffect } from 'react';

import { useUser } from '@/hooks/useUser';
import { INDEX_PATH, SIGN_IN_PATH } from '@/lib/paths';

import type { ReactNode } from 'react';

type PrivateRouteProps = Readonly<{
	loggedIn?: boolean;
	children: ReactNode;
}>;

export const PrivateRoute = ({ loggedIn = true, children }: PrivateRouteProps) => {
	const router = useLocalizedRouter();
	const { isLoading, user } = useUser();

	useEffect(() => {
		if (!isLoading && loggedIn !== Boolean(user)) {
			router.replace(loggedIn ? SIGN_IN_PATH : INDEX_PATH);
		}
	}, [isLoading, loggedIn, router, user]);

	if (isLoading || loggedIn !== Boolean(user)) {
		return null;
	}

	return <>{children}</>;
};
