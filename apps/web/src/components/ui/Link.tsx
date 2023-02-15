import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, ...props }: LinkProps) => (
	<NextLink
		className={twMerge(
			'text-link-default hover:text-link-hover hover:underline active:text-link-pressed',
			className
		)}
		{...props}
	/>
);
