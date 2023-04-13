import AvailableBadgeIcon from '@/assets/icons/badge/available.svg';
import { uiTwMerge } from '@/lib/uiTwMerge';

const statuses = {
	available: {
		label: 'Available',
		icon: AvailableBadgeIcon,
	},
} as const;

const sizes = {
	0: 'h-1.5 w-1.5',
	28: 'h-2.5 w-2.5',
	40: 'h-3 w-3',
	56: 'h-4 w-4',
	64: 'h-5 w-5',
	96: 'h-7 w-7',
} as const;

const variants = {
	brand: 'ui-border-brand-selected dark:ui-border-neutral-background-5',
} as const;

const getBadgeSize = (size: number) => {
	const badgeSizes = Object.keys(sizes)
		.map(Number)
		.sort((a, b) => b - a);
	const matchingBadgeSize = (badgeSizes.find(badgeSize => size >= badgeSize) ||
		0) as keyof typeof sizes;

	return sizes[matchingBadgeSize];
};

type AvatarBadgeProps = Readonly<{
	size: number;
	status?: keyof typeof statuses;
	variant?: keyof typeof variants;
}>;

export const AvatarBadge = ({ size, status = 'available', variant }: AvatarBadgeProps) => {
	const { icon: Icon } = statuses[status];

	return (
		<div
			className={uiTwMerge(
				'ui-absolute -ui-bottom-0.5 -ui-right-0.5 ui-flex ui-rounded-full ui-border-2 ui-border-neutral-background-default ui-bg-neutral-background-default',
				variant && variants[variant]
			)}
		>
			<Icon className={getBadgeSize(size)} />
		</div>
	);
};
