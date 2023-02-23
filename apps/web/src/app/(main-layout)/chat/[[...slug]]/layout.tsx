import { ChatAsideMenu } from '@/components/ChatAsideMenu/ChatAsideMenu';

import type { ReactNode } from 'react';

import type { OptionalCatchAllParams } from '@/types';

type ChatLayoutProps = Readonly<{
	children: ReactNode;
	params: OptionalCatchAllParams<'slug'>;
}>;

const ChatLayout = ({ children, params: { slug } }: ChatLayoutProps) => {
	const isNewChat = slug?.[0] === 'new';

	return (
		<div className="flex h-full">
			<ChatAsideMenu isNewChat={isNewChat} />
			{children}
		</div>
	);
};

export default ChatLayout;
