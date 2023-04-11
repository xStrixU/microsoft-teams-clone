'use client';

import { useState } from 'react';
import { TextInput } from 'ui';

import SendIcon from '@/assets/icons/send.svg';
import { useConversationContext } from '@/providers/ConversationProvider';
import { createMessage } from '@/services/conversations.service';

import type { FormEvent } from 'react';

type MessageInputProps = Readonly<{
	isNewChat: boolean;
}>;

export const MessageInput = ({ isNewChat }: MessageInputProps) => {
	const [inputValue, setInputValue] = useState('');
	const { createConversation, conversationId } = useConversationContext();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isNewChat) {
			await createConversation();
		}

		if (conversationId) {
			await createMessage({ id: conversationId, content: inputValue });
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mx-auto mt-auto flex w-full max-w-4xl flex-col">
			<TextInput
				placeholder="Type a new message"
				value={inputValue}
				onChange={({ target }) => setInputValue(target.value)}
			/>
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
