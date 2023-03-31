'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useGetAllConversations } from '@/hooks/useGetAllConversations';
import { createSafeContext } from '@/lib/createSafeContext';
import * as conversationsService from '@/services/conversations.service';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { Conversation, ConversationMessage, FoundUser } from '@/types';

interface ConversationContextValue {
	conversationId: string | null;
	activeConversation: Conversation | null;
	selectedUsers: FoundUser[];
	groupName: string;
	messages: ConversationMessage[];

	addSelectedUser: (user: FoundUser) => void;
	removeSelectedUser: (user: FoundUser) => void;
	setGroupName: Dispatch<SetStateAction<string>>;
	createConversation: () => Promise<void>;
	addMessages: (newMessages: ConversationMessage[]) => void;
}

const [useConversationContext, ConversationContextProvider] =
	createSafeContext<ConversationContextValue>();

const ConversationProvider = ({ children }: { readonly children: ReactNode }) => {
	const conversationId = useSelectedLayoutSegment();
	const { conversations } = useGetAllConversations();
	const [selectedUsers, setSelectedUsers] = useState<FoundUser[]>([]);
	const [groupName, setGroupName] = useState('');
	const [messages, setMessages] = useState<ConversationMessage[]>([]);

	const activeConversation =
		conversations.find(conversation => conversation.id === conversationId) ?? null;

	const addSelectedUser = (user: FoundUser) => {
		setSelectedUsers([user, ...selectedUsers]);
	};

	const removeSelectedUser = (user: FoundUser) => {
		const filteredSelectedUsers = selectedUsers.filter(({ id }) => user.id !== id);

		setSelectedUsers(filteredSelectedUsers);
	};

	const createConversation = async () => {
		await conversationsService.createConversation({
			memberIds: selectedUsers.map(({ id }) => id),
		});

		setSelectedUsers([]);
	};

	const addMessages = (newMessages: ConversationMessage[]) => {
		const filteredMessages = newMessages.filter(
			message => !messages.find(({ id }) => message.id === id)
		);

		setMessages(messages => [...messages, ...filteredMessages]);
	};

	useEffect(() => {
		setMessages([]);
	}, [conversationId]);

	return (
		<ConversationContextProvider
			value={{
				conversationId,
				activeConversation,
				selectedUsers,
				groupName,
				messages,
				addSelectedUser,
				removeSelectedUser,
				setGroupName,
				createConversation,
				addMessages,
			}}
		>
			{children}
		</ConversationContextProvider>
	);
};

export { ConversationProvider, useConversationContext };
