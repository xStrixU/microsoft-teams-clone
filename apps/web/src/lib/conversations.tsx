import type { Conversation } from '@/types';

export const getConversationName = (conversation: Conversation) =>
	conversation.user ? conversation.user.fullName : conversation.name ?? '';
