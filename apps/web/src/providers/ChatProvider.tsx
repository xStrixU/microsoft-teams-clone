'use client';

import { useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';
import * as conversationsService from '@/services/conversations.service';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { FoundUser } from '@/types';

interface ChatContextValue {
	selectedUsers: FoundUser[];
	groupName: string;

	addSelectedUser: (user: FoundUser) => void;
	removeSelectedUser: (user: FoundUser) => void;
	setGroupName: Dispatch<SetStateAction<string>>;
	createConversation: () => Promise<void>;
}

const [useChatContext, ChatContextProvider] = createSafeContext<ChatContextValue>();

const ChatProvider = ({ children }: { readonly children: ReactNode }) => {
	const [selectedUsers, setSelectedUsers] = useState<FoundUser[]>([]);
	const [groupName, setGroupName] = useState('');

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

	return (
		<ChatContextProvider
			value={{
				selectedUsers,
				groupName,
				addSelectedUser,
				removeSelectedUser,
				setGroupName,
				createConversation,
			}}
		>
			{children}
		</ChatContextProvider>
	);
};

export { ChatProvider, useChatContext };
