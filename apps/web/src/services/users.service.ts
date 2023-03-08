import { fetcher } from '@/lib/fetcher';

export const createUser = fetcher.path('/users').method('post').create();

export const getUsers = fetcher.path('/users').method('get').create();
