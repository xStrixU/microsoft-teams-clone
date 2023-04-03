import { io } from 'socket.io-client';

import 'client-only';

export const conversationsSocket = io(`${process.env.NEXT_PUBLIC_API_BASE_URL}/conversations`);
