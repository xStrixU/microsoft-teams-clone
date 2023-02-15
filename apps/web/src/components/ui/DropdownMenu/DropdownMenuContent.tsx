'use client';

import { twMerge } from 'tailwind-merge';

import { useDropdownMenuContext } from './DropdownMenu.context';

import type { ReactNode } from 'react';

type DropdownMenuContentProps = Readonly<{
	className?: string;
	children: ReactNode;
}>;

export const DropdownMenuContent = ({ className, children }: DropdownMenuContentProps) => {
	const { isOpen } = useDropdownMenuContext();

	if (!isOpen) return null;

	return (
		<div
			className={twMerge(
				'absolute right-0 top-12 z-10 w-56 rounded border border-zinc-200 bg-neutral-background-default py-2 shadow-lg dark:border-neutral-800',
				className
			)}
		>
			{children}
		</div>
	);
};
