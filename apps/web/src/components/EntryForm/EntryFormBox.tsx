import type { ReactNode } from 'react';

type EntryFormBoxProps = Readonly<{
	title: string;
	bottomSection: ReactNode;
	children: ReactNode;
}>;

export const EntryFormBox = ({ title, bottomSection, children }: EntryFormBoxProps) => (
	<div className="flex h-full w-full flex-col justify-center border-gray-300 bg-neutral-background-default p-8 dark:border-neutral-900 sm:h-fit sm:max-w-lg sm:rounded-2xl sm:border">
		<h1 className="mb-7 text-3xl font-semibold text-neutral-foreground sm:text-center">{title}</h1>
		{children}
		<p className="mt-6 text-center text-[15px] text-neutral-foreground">{bottomSection}</p>
	</div>
);
