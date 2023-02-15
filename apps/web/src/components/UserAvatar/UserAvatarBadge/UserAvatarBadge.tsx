import { twMerge } from 'tailwind-merge';

import { sizes, statuses } from './UserAvatarBadge.constants';

type UserAvatarBadgeProps = Readonly<{
	size: number;
	status?: keyof typeof statuses;
	className?: string;
}>;

const getBadgeSize = (size: number): keyof typeof sizes => {
	if (size >= 96) {
		return 'extra-large';
	} else if (size >= 64) {
		return 'large';
	} else if (size >= 56) {
		return 'medium';
	} else if (size >= 40) {
		return 'small';
	} else if (size >= 28) {
		return 'extra-small';
	} else {
		return 'tiny';
	}
};

export const UserAvatarBadge = ({
	size,
	status = 'available',
	className,
}: UserAvatarBadgeProps) => {
	const { icon: Icon } = statuses[status];

	return (
		<div
			className={twMerge(
				'absolute -bottom-0.5 -right-0.5 flex rounded-full border-2 border-neutral-background-default bg-neutral-background-default',
				className
			)}
		>
			<Icon className={sizes[getBadgeSize(size)]} />
		</div>
	);
};
