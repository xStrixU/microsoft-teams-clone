import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import type { MessageDto } from './dto/message.dto';

export const CONVERSATION_ROOM_PREFIX = 'conversation:';

@WebSocketGateway({
	namespace: 'conversations',
})
export class ConversationsGateway {
	@WebSocketServer()
	server: Server<
		{
			[event: string]: (...args: any[]) => void;
		},
		{
			message: (arg: MessageDto) => void;
		}
	>;

	@SubscribeMessage('join')
	onJoinConversation(client: Socket, conversationId: string): void {
		client.rooms.forEach(room => {
			if (client.id !== room) {
				client.leave(room);
			}
		});

		client.join(CONVERSATION_ROOM_PREFIX + conversationId);
	}

	@SubscribeMessage('leave')
	onLeaveConversation(client: Socket, conversationId: string): void {
		client.leave(CONVERSATION_ROOM_PREFIX + conversationId);
	}
}
