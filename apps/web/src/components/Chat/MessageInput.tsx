'use client';

import { Input } from '../ui/Inputs/Input/Input';

import SendIcon from '~/icons/send.svg';

import { useChatContext } from '@/providers/ChatProvider';

import type { FormEvent } from 'react';

type MessageInputProps = Readonly<{
	isNewChat: boolean;
}>;

export const MessageInput = ({ isNewChat }: MessageInputProps) => {
	const { createConversation } = useChatContext();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isNewChat) {
			createConversation();
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mt-auto flex w-full flex-col">
			<Input placeholder="Type a new message" />
			<button
				type="submit"
				className="hover:fill-icon ml-auto w-fit p-2 text-neutral-foreground hover:text-brand-default dark:hover:text-link-default"
				title="Send"
			>
				<SendIcon />
			</button>
		</form>
	);
};
