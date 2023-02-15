'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type ActiveLinkProps = Readonly<{
	activeClassName?: string;
	exact?: boolean;
}> &
	ComponentProps<typeof Link>;

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	exact = false,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href.toString() : pathname?.startsWith(href.toString());

	return (
		<Link href={href} className={twMerge(className, isActive && activeClassName)} {...props} />
	);
};
