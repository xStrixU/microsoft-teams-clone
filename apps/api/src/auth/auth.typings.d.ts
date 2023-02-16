import type { User } from '@prisma/client';

declare module 'express' {
	interface Request {
		user: User;
	}
}
