import { Prisma } from '@prisma/client';

import type { PrismaError } from './prisma.types';

export const isPrismaError = (err: unknown): err is PrismaError =>
	!!(err && err instanceof Prisma.PrismaClientKnownRequestError);
