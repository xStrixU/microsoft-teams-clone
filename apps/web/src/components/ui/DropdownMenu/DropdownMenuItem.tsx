import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactElement, ReactNode } from 'react';

type DropdownMenuItemProps = Readonly<{
	icon?: ReactElement;
	children: ReactNode;
}> &
	JSX.IntrinsicElements['button'];

export const DropdownMenuItem = ({ icon, children, ...props }: DropdownMenuItemProps) => (
	<Menu.Item>
		{({ active }) => (
			<button
				className={twMerge(
					'flex w-full items-center px-5 py-1.5 text-left text-neutral-foreground-2-default active:bg-zinc-300 dark:active:bg-neutral-700',
					active && 'bg-zinc-200 text-neutral-foreground-2-action dark:bg-neutral-700'
				)}
				{...props}
			>
				{icon}
				<span className="text-sm">{children}</span>
			</button>
		)}
	</Menu.Item>
);
