import { Avatar } from 'ui';

import type { ComponentProps } from 'react';

type UserAvatarProps = Readonly<{
	user: { fullName: string };
}> &
	Omit<ComponentProps<typeof Avatar>, 'name' | 'image' | 'alt'>;

export const UserAvatar = ({ user, ...props }: UserAvatarProps) => (
	<Avatar name={user.fullName} {...props} />
);
