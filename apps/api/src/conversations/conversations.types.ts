import type { messageInclude } from './conversations.service';
import type { Prisma } from '@prisma/client';

export type AppMessage = Prisma.MessageGetPayload<{ include: typeof messageInclude }>;
