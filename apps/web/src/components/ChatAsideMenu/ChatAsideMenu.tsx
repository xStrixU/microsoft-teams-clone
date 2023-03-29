import { twMerge } from 'tailwind-merge';

import { ChatAsideMenuHeader } from './ChatAsideMenuHeader';
import { ChatConversationsList } from './ChatConversationsList/ChatConversationsList';

export const ChatAsideMenu = () => (
	<aside
		className={twMerge(
			'relative h-full w-72 bg-neutral-background-disabled',
			'after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-r after:from-transparent after:to-neutral-400 after:opacity-20 dark:after:bg-none'
		)}
	>
		<ChatAsideMenuHeader />
		<ChatConversationsList />
	</aside>
);
