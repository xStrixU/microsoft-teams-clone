import { ChatAsideMenu } from '@/components/ChatAsideMenu/ChatAsideMenu';

import type { ReactNode } from 'react';

const ChatLayout = ({ children }: { readonly children: ReactNode }) => (
	<div className="flex h-full">
		<ChatAsideMenu />
		{children}
	</div>
);

export default ChatLayout;
