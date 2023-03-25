import { MessageInput } from './MessageInput';
import { Messages } from './Messages/Messages';
import { ChatHeader } from './NewChatHeader/ChatHeader';
import { NewChatHeader } from './NewChatHeader/NewChatHeader';

type ChatProps = Readonly<{
	isNewChat: boolean;
	conversationId: string;
}>;

export const Chat = ({ isNewChat, conversationId }: ChatProps) => (
	<div className="flex h-full grow flex-col">
		{isNewChat ? <NewChatHeader /> : <ChatHeader />}
		<div className="flex h-chat-content flex-col">
			{!isNewChat && <Messages conversationId={conversationId} />}
			<MessageInput isNewChat={isNewChat} />
		</div>
	</div>
);
