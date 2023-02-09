import { fetcher } from '@/lib/fetcher';

export const createUser = fetcher.path('/users').method('post').create();
