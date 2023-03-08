import { MessageInput } from './MessageInput';
import { NewChatHeader } from './NewChatHeader/NewChatHeader';

type ChatProps = Readonly<{
	isNewChat: boolean;
}>;

export const Chat = ({ isNewChat }: ChatProps) => (
	<div className="flex grow flex-col">
		{isNewChat && <NewChatHeader />}
		<div className="mx-auto flex w-full max-w-4xl grow flex-col px-6 py-2">
			<MessageInput />
		</div>
	</div>
);
