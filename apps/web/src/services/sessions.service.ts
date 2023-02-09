import { fetcher } from '@/lib/fetcher';

export const createSession = fetcher.path('/sessions').method('post').create();

export const getCurrentSession = fetcher.path('/sessions/me').method('get').create();

export const deleteCurrentSession = fetcher.path('/sessions/me').method('delete').create();
