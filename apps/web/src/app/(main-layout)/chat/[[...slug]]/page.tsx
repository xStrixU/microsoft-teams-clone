import { Chat } from '@/components/Chat/Chat';

import type { OptionalCatchAllParams } from '@/types';

type ChatPageProps = Readonly<{
	params: OptionalCatchAllParams<'slug'>;
}>;

export const metadata = {
	title: 'Chat',
};

const ChatPage = ({ params: { slug } }: ChatPageProps) => {
	const conversationId = slug?.[0] || null;

	if (!conversationId) {
		return null;
	}

	return <Chat conversationId={conversationId} />;
};

export default ChatPage;
