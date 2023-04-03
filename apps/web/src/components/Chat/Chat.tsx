import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { Messages } from './Messages/Messages';
import { NewChatHeader } from './NewChatHeader/NewChatHeader';

type ChatProps = Readonly<{
	conversationId: string;
}>;

export const Chat = ({ conversationId }: ChatProps) => {
	const isNewChat = conversationId === 'new';

	return (
		<div className="flex h-full grow flex-col">
			{isNewChat ? <NewChatHeader /> : <ChatHeader />}
			<div className="flex h-chat-content flex-col">
				{!isNewChat && <Messages conversationId={conversationId} />}
				<MessageInput isNewChat={isNewChat} />
			</div>
		</div>
	);
};
