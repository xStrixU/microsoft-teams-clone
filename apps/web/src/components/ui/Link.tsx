import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type LinkProps<T> = ComponentProps<typeof NextLink<T>>;

export const Link = <T,>({ className, ...props }: LinkProps<T>) => (
	<NextLink
		className={twMerge(
			'text-link-default hover:text-link-hover hover:underline active:text-link-pressed',
			className
		)}
		{...props}
	/>
);
