import { fetcher } from '@/lib/fetcher';

export const getCurrentUserTeams = fetcher.path('/users/me/teams').method('get').create();

export const createTeam = fetcher.path('/teams').method('post').create();
