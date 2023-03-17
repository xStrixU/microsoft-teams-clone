import { fetcher } from '@/lib/fetcher';

export const getCurrentUserConversations = fetcher
	.path('/users/me/conversations')
	.method('get')
	.create();

export const createConversation = fetcher.path('/conversations').method('post').create();
