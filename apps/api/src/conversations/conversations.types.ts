import type { createConversationInclude, messageInclude } from './conversations.service';
import type { Prisma } from '@prisma/client';

export type AppConversation = Prisma.ConversationGetPayload<{
	include: ReturnType<typeof createConversationInclude>;
}>;
export type AppMessage = Prisma.MessageGetPayload<{ include: typeof messageInclude }>;
