'use client';

import moment from 'moment';

import { Message } from './Message';

import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

import { useUser } from '@/hooks/useUser';

import type { MessageGroup as MessageGroupType } from '@/lib/messages';

type MessageGroupProps = Readonly<{
	messageGroup: MessageGroupType;
}>;

export const MessageGroup = ({ messageGroup }: MessageGroupProps) => {
	const { user } = useUser();

	const mine = user?.id === messageGroup.author.id;

	return (
		<div className="mx-auto flex w-full max-w-4xl gap-2">
			{!mine && <UserAvatar user={messageGroup.author} className="shrink-0" />}
			<ul className="w-full space-y-0.5">
				{messageGroup.contents.map((content, i) => (
					<li key={i}>
						{i === 0 ? (
							<Message
								mine={mine}
								date={moment(messageGroup.createdAt).calendar()}
								{...(!mine && { author: messageGroup.author.fullName })}
							>
								{content}
							</Message>
						) : (
							<Message mine={mine}>{content}</Message>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
