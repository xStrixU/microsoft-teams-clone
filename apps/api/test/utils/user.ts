import type request from 'supertest';

import type { CreateSessionDto } from '@/sessions/dto/create-session.dto';
import type { CreateUserDto } from '@/users/dto/create-user.dto';

export const createUserDto: CreateUserDto = {
	firstName: 'Foo',
	lastName: 'Bar',
	email: 'foo@gmail.com',
	password: 'pass123',
};

export const createSessionDto: CreateSessionDto = {
	email: createUserDto.email,
	password: createUserDto.password,
};

export const register = (agent: request.SuperAgentTest, body = createUserDto) =>
	agent.post('/users').send(body);

export const login = (agent: request.SuperAgentTest, body = createSessionDto) =>
	agent.post('/sessions').send(body);

export const logout = (agent: request.SuperAgentTest) => agent.delete('/sessions/me');
