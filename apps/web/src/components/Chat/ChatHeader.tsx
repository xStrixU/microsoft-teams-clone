'use client';

import { Button, ButtonGroup } from 'ui';

import { ConversationImage } from '@/components/ConversationImage';

import CallIcon from '@/assets/icons/call.svg';
import VideoCallIcon from '@/assets/icons/video-call.svg';
import { getConversationName } from '@/lib/conversations';
import { useConversationContext } from '@/providers/ConversationProvider';

export const ChatHeader = () => {
	const { activeConversation } = useConversationContext();

	if (!activeConversation) {
		return null;
	}

	const conversationName = getConversationName(activeConversation);

	return (
		<div className="flex h-chat-header w-full items-center justify-between border-b border-neutral-background-5 bg-neutral-background-default px-5">
			<div className="flex gap-2.5">
				<ConversationImage conversation={activeConversation} />
				<p className="text-lg font-bold text-neutral-foreground">{conversationName}</p>
			</div>
			<ButtonGroup>
				<Button size="icon" title="No available camera found" disabled>
					<VideoCallIcon />
				</Button>
				<Button size="icon" title="Audio call">
					<CallIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
};
