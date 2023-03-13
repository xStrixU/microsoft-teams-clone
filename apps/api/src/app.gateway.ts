import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

import type { MessageDto } from './conversations/dto/message.dto';
import type { ConversationEventName } from 'common';

@WebSocketGateway()
export class AppGateway {
	@WebSocketServer()
	server: Server<
		{
			[event: string]: (...args: any[]) => void;
		},
		{
			[key: ConversationEventName]: (arg: MessageDto) => void;
		}
	>;
}
