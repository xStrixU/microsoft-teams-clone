'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type ActiveLinkProps<T> = Readonly<{
	activeClassName?: string;
	exact?: boolean;
}> &
	ComponentProps<typeof Link<T>>;

export const ActiveLink = <T,>({
	href,
	className,
	activeClassName,
	exact = false,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const formattedHref = href.toString().replace(/\/$/, '');

	const isActive = exact ? pathname === formattedHref : pathname?.startsWith(formattedHref);

	return (
		<Link href={href} className={twMerge(className, isActive && activeClassName)} {...props} />
	);
};
