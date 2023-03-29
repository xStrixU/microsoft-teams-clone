'use client';

import { useEffect } from 'react';

import { conversationsSocket } from '@/lib/conversationsSocket';
import { useConversationContext } from '@/providers/ConversationProvider';

import type { ReactNode } from 'react';

import type { ConversationMessage } from '@/types';

export const ConversationsSocket = ({ children }: { readonly children: ReactNode }) => {
	const { conversationId, addMessages } = useConversationContext();

	useEffect(() => {
		if (conversationId) {
			conversationsSocket.emit('join', conversationId);
		}

		return () => {
			conversationsSocket.emit('leave', conversationId);
		};
	}, [conversationId]);

	useEffect(() => {
		const onMessage = (message: ConversationMessage) => {
			addMessages([message]);
		};

		conversationsSocket.on('message', onMessage);

		return () => {
			conversationsSocket.off('message', onMessage);
		};
	}, [addMessages]);

	return <>{children}</>;
};
