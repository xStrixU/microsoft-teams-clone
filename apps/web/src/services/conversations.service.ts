import { fetcher } from '@/lib/fetcher';

export const createConversation = fetcher.path('/conversations').method('post').create();
