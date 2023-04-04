import ms from 'ms';
import { describe, expect, it } from 'vitest';

import { groupMessages } from './messages';

import type { ConversationMessage, FoundUser } from '@/types';

describe('messages', () => {
	it('should group messages', () => {
		const time = new Date().getTime();

		const firstUser: FoundUser = {
			id: 1,
			fullName: 'Alex Smith',
		};
		const secondUser: FoundUser = {
			id: 2,
			fullName: 'James Williams',
		};

		const messages: ConversationMessage[] = [
			{
				id: 1,
				author: firstUser,
				content: 'Lorem',
				createdAt: time,
			},
			{
				id: 2,
				author: firstUser,
				content: 'ipsum',
				createdAt: time + 1,
			},
			{
				id: 3,
				author: firstUser,
				content: 'dolor',
				createdAt: time + 2,
			},
			{
				id: 4,
				author: secondUser,
				content: 'sit',
				createdAt: time + 3,
			},
			{
				id: 5,
				author: secondUser,
				content: 'amet',
				createdAt: time + 4,
			},
			{
				id: 6,
				author: firstUser,
				content: 'foo',
				createdAt: time + 5,
			},
			{
				id: 7,
				author: firstUser,
				content: 'bar',
				createdAt: time + 6 + ms('5m'),
			},
			{
				id: 8,
				author: firstUser,
				content: 'baz',
				createdAt: time + 7 + ms('5m'),
			},
		];
		const groupedMessages = groupMessages(messages);

		expect(groupedMessages.length).toBe(4);

		expect(groupedMessages[0].author.id).toBe(firstUser.id);
		expect(groupedMessages[0].contents.length).toBe(2);
		expect(
			groupedMessages[0].contents.every(content =>
				messages
					.slice(-2)
					.map(({ content }) => content)
					.includes(content)
			)
		).toBe(true);

		expect(groupedMessages[1].author.id).toBe(firstUser.id);
		expect(groupedMessages[1].contents.length).toBe(1);
		expect(groupedMessages[1].contents[0]).toBe(messages[5].content);

		expect(groupedMessages[2].author.id).toBe(secondUser.id);
		expect(groupedMessages[2].contents.length).toBe(2);
		expect(
			groupedMessages[2].contents.every(content =>
				messages
					.slice(3, 5)
					.map(({ content }) => content)
					.includes(content)
			)
		).toBe(true);

		expect(groupedMessages[3].author.id).toBe(firstUser.id);
		expect(groupedMessages[3].contents.length).toBe(3);
		expect(
			groupedMessages[3].contents.every(content =>
				messages
					.slice(0, 3)
					.map(({ content }) => content)
					.includes(content)
			)
		).toBe(true);
	});
});
