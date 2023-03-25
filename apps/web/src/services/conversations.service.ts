import { fetcher } from '@/lib/fetcher';

export const getCurrentUserConversations = fetcher
	.path('/users/me/conversations')
	.method('get')
	.create();

export const createConversation = fetcher.path('/conversations').method('post').create();

export const getMessages = fetcher.path('/conversations/{id}/messages').method('get').create();

export const createMessage = fetcher.path('/conversations/{id}/messages').method('post').create();
