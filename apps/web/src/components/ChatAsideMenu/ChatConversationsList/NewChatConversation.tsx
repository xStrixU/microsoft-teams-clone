import { BaseChatConversation } from './BaseChatConversation';

import NewChatIcon from '@/assets/icons/new-chat.svg';

export const NewChatConversation = () => (
	<BaseChatConversation
		image={<NewChatIcon className="rounded-full text-neutral-foreground-inverted" />}
		name="New chat"
		isActive
	/>
);
