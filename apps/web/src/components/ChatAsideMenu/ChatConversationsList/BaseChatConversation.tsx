import { twMerge } from 'tailwind-merge';

import type { ReactElement } from 'react';

type BaseChatConversationProps = Readonly<{
	image: ReactElement;
	name: string;
	isActive: boolean;
}>;

export const BaseChatConversation = ({ image, name, isActive }: BaseChatConversationProps) => (
	<div
		className={twMerge(
			'flex h-12 cursor-pointer select-none items-center rounded px-3 py-2 text-sm text-neutral-foreground hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-neutral-800 active:dark:bg-neutral-900',
			isActive && 'bg-neutral-background-default'
		)}
	>
		{image}
		<span className="ml-2">{name}</span>
	</div>
);
