import Link from 'next/link';

import ComposeIcon from '@/assets/icons/compose.svg';

export const ChatAsideMenuHeader = () => (
	<div className="flex h-14 items-center justify-between border-b border-neutral-stroke-disabled px-4">
		<h1 className="text-xl font-bold text-neutral-foreground">Chat</h1>
		<Link
			href="/chat/new"
			className="h-8 w-8 rounded-full bg-brand-default text-white hover:bg-brand-hover active:bg-brand-pressed"
			title="New chat"
			aria-label="New chat"
		>
			<ComposeIcon />
		</Link>
	</div>
);
