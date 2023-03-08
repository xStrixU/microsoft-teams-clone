import { Chat } from '@/components/Chat/Chat';

import type { OptionalCatchAllParams } from '@/types';

type ChatPageProps = Readonly<{
	params: OptionalCatchAllParams<'slug'>;
}>;

export const metadata = {
	title: 'Chat',
};

const ChatPage = ({ params: { slug } }: ChatPageProps) => {
	const isNewChat = slug?.[0] === 'new';

	return <Chat isNewChat={isNewChat} />;
};

export default ChatPage;
