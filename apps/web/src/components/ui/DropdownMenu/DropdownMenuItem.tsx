import type { ReactElement, ReactNode } from 'react';

type DropdownMenuItemProps = Readonly<{
	icon?: ReactElement;
	children: ReactNode;
}> &
	JSX.IntrinsicElements['button'];

export const DropdownMenuItem = ({ icon, children, ...props }: DropdownMenuItemProps) => (
	<button
		className="flex w-full items-center px-5 py-1.5 text-left text-neutral-foreground-2-default hover:bg-zinc-200 hover:text-neutral-foreground-2-action active:bg-zinc-300 dark:hover:bg-neutral-700 dark:active:bg-neutral-700"
		{...props}
	>
		{icon}
		<span className="text-sm">{children}</span>
	</button>
);
