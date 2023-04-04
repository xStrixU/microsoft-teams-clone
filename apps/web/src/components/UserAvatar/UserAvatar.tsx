import { twMerge } from 'tailwind-merge';

import { UserAvatarBadge } from './UserAvatarBadge/UserAvatarBadge';

import { getInitials } from '@/lib/utils';

import type { ComponentProps } from 'react';

const sizes = {
	16: 'h-4 w-4 text-[0.625rem]',
	20: 'h-5 w-5 text-[0.625rem]',
	24: 'h-6 w-6 text-[0.625rem]',
	28: 'h-7 w-7 text-xs',
	32: 'h-8 w-8 text-sm',
	36: 'h-9 w-9 text-sm',
	40: 'h-10 w-10 text-sm',
	48: 'h-12 w-12 text-base',
	56: 'h-14 w-14 text-xl',
	64: 'h-16 w-16 text-xl',
	72: 'h-[4.5rem] w-[4.5rem] text-xl',
	96: 'h-24 w-24 text-xl',
	120: 'h-[7.5rem] w-[7.5rem] text-2xl',
	128: 'h-32 w-32 text-2xl',
} as const;

type UserAvatarProps = Readonly<{
	user: { fullName: string };
	size?: keyof typeof sizes;
	className?: string;
	badge?: Omit<ComponentProps<typeof UserAvatarBadge>, 'size'>;
}>;

export const UserAvatar = ({ user, size = 32, className, badge }: UserAvatarProps) => {
	const initials = getInitials(user.fullName);

	return (
		<div
			className={twMerge(
				'relative flex h-10 w-10 select-none items-center justify-center rounded-full bg-red-200 text-sm font-medium text-red-700',
				sizes[size],
				className
			)}
		>
			{initials}
			{badge && <UserAvatarBadge size={size} {...badge} />}
		</div>
	);
};
