'use client';

import { forwardRef } from 'react';

import { UserAvatar } from '../UserAvatar';

import { useUser } from '@/hooks/useUser';

export const HeaderUserAvatar = forwardRef<HTMLButtonElement>((props, ref) => {
	const { user } = useUser();

	if (!user) return null;

	return (
		<button
			ref={ref}
			className="flex h-full w-12 items-center justify-center hover:bg-brand-default active:bg-brand-pressed dark:hover:bg-neutral-foreground-inverted dark:active:bg-zinc-900"
			{...props}
		>
			<UserAvatar
				user={user}
				badge={{
					status: 'available',
					variant: 'brand',
				}}
			/>
		</button>
	);
});

HeaderUserAvatar.displayName = 'HeaderUserAvatar';
