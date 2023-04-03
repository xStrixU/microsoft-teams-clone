import AvailableBadgeIcon from '@/assets/icons/badge/available.svg';

import type { SVGComponent } from '@/types';

export const statuses = {
	available: {
		label: 'Available',
		icon: AvailableBadgeIcon,
	},
} as const satisfies Record<string, { label: string; icon: SVGComponent }>;

export const sizes = {
	tiny: 'h-1.5 w-1.5',
	'extra-small': 'h-2.5 w-2.5',
	small: 'h-3 w-3',
	medium: 'h-4 w-4',
	large: 'h-5 w-5',
	'extra-large': 'h-7 w-7',
} as const;
