export const INDEX_PATH = '/';

export const SIGN_IN_PATH = '/sign-in';
export const SIGN_UP_PATH = '/sign-up';

export const ACTIVITY_PATH = '/activity';

export const CHAT_PATH = '/chat';
export const withChatPath = (path: string) => `${CHAT_PATH}${path}`;

export const CALENDAR_PATH = '/calendar';

export const TEAMS_PATH = '/teams';
export const withTeamsPath = (path: string) => `${TEAMS_PATH}${path}`;
