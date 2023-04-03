import { ConversationsSocket } from '@/components/Chat/ConversationsSocket';

import { ConversationProvider } from '@/providers/ConversationProvider';

import type { ReactNode } from 'react';

const ChatRootLayout = ({ children }: { readonly children: ReactNode }) => (
	<ConversationProvider>
		<ConversationsSocket />
		{children}
	</ConversationProvider>
);

export default ChatRootLayout;
