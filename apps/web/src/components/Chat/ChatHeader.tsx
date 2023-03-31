'use client';

import CallIcon from '~/icons/call.svg';
import VideoCallIcon from '~/icons/video-call.svg';

import { ConversationImage } from '@/components/ConversationImage';
import { Button } from '@/components/ui/Button/Button';

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
			<div className="flex">
				<Button
					size="icon"
					shape="square"
					title="No available camera found"
					disabled
					className="rounded-l"
				>
					<VideoCallIcon />
				</Button>
				<Button size="icon" shape="square" title="Audio call" className="rounded-r">
					<CallIcon />
				</Button>
			</div>
		</div>
	);
};
