import { ChatAsideMenu } from '@/components/ChatAsideMenu/ChatAsideMenu';

import { ChatProvider } from '@/providers/ChatProvider';

import type { ReactNode } from 'react';

import type { OptionalCatchAllParams } from '@/types';

type ChatLayoutProps = Readonly<{
	children: ReactNode;
	params: OptionalCatchAllParams<'slug'>;
}>;

const ChatLayout = ({ children, params: { slug } }: ChatLayoutProps) => {
	const conversationId = slug?.[0] || null;
	const isNewChat = conversationId === 'new';

	return (
		<ChatProvider>
			<div className="flex h-full">
				<ChatAsideMenu conversationId={conversationId} isNewChat={isNewChat} />
				{children}
			</div>
		</ChatProvider>
	);
};

export default ChatLayout;
