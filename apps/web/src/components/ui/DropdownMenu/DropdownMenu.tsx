'use client';

import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { DropdownMenuContextProvider } from './DropdownMenu.context';
import { DropdownMenuContent } from './DropdownMenuContent';
import { DropdownMenuDivider } from './DropdownMenuDivider';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuTarget } from './DropdownMenuTarget';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import type { ReactNode } from 'react';

type DropdownMenuProps = Readonly<{
	className?: string;
	children: ReactNode;
}>;

export const DropdownMenu = ({ className, children }: DropdownMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const toggle = () => setIsOpen(!isOpen);
	const close = () => setIsOpen(false);

	useWindowEvent('click', event => {
		if (containerRef.current && !event.composedPath().includes(containerRef.current)) {
			close();
		}
	});

	return (
		<DropdownMenuContextProvider value={{ isOpen, toggle, close }}>
			<div ref={containerRef} className={twMerge('relative', className)}>
				{children}
			</div>
		</DropdownMenuContextProvider>
	);
};

DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Divider = DropdownMenuDivider;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Target = DropdownMenuTarget;
