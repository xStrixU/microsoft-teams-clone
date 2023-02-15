'use client';

import { usePathname } from 'next/navigation';
import { Link, useLocale } from 'next-intl';
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
	const locale = useLocale();
	const pathname = usePathname();
	const localeHref = `/${locale}${href.toString()}`;

	const isActive = exact ? pathname === localeHref : pathname?.startsWith(localeHref);

	return (
		<Link href={href} className={twMerge(className, isActive && activeClassName)} {...props} />
	);
};
