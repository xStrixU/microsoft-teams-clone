import { mapUserToFoundUserDto } from '@/users/users.mapper';

import type { AppConversation, AppMessage } from './conversations.types';
import type { ConversationDto } from './dto/conversation.dto';
import type { MessageDto } from './dto/message.dto';

export const mapAppConversationToConversationDto = ({
	id,
	name,
	members,
}: AppConversation): ConversationDto => {
	const isGroup = Boolean(members.length > 1);
	const groupName = isGroup
		? name || members.map(({ member }) => member.fullName).join(', ')
		: null;

	return {
		id,
		isGroup,
		...(!isGroup && { user: mapUserToFoundUserDto(members[0].member) }),
		...(groupName && { name: groupName }),
	};
};

export const mapAppMessageToMessageDto = ({
	id,
	author,
	content,
	createdAt,
}: AppMessage): MessageDto => ({
	id,
	author: mapUserToFoundUserDto(author),
	content,
	createdAt: createdAt.getTime(),
});
