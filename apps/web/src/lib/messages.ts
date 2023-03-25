import ms from 'ms';

import type { ConversationMessage, FoundUser } from '@/types';

export interface MessageGroup {
	author: FoundUser;
	createdAt: number;
	lastMessageCreatedAt: number;
	contents: string[];
}

export const groupMessages = (messages: ConversationMessage[]) => {
	const groups: MessageGroup[] = [];

	messages.forEach(message => {
		const lastGroup = groups[groups.length - 1];

		if (
			!lastGroup ||
			lastGroup.author.id !== message.author.id ||
			message.createdAt - lastGroup.lastMessageCreatedAt > ms('5m')
		) {
			const group: MessageGroup = {
				author: message.author,
				createdAt: message.createdAt,
				lastMessageCreatedAt: message.createdAt,
				contents: [message.content],
			};

			groups.push(group);
			return;
		}

		lastGroup.lastMessageCreatedAt = message.createdAt;
		lastGroup.contents.push(message.content);
	});

	return groups.reverse();
};
