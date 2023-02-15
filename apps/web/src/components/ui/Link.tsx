import { Link as LocalizedLink } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof LocalizedLink>;

export const Link = ({ className, ...props }: LinkProps) => (
	<LocalizedLink
		className={twMerge(
			'text-link-default hover:text-link-hover hover:underline active:text-link-pressed',
			className
		)}
		{...props}
	/>
);
