import { twMerge } from 'tailwind-merge';

import NewChatIcon from '~/icons/new-chat.svg';

import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

import type { User } from '@/types';

type ChatUserProps = Readonly<
	(
		| {
				user: User;
		  }
		| {
				name: string;
		  }
	) & {
		isActive?: boolean;
	}
>;

export const ChatUser = ({ isActive, ...props }: ChatUserProps) => {
	const avatar =
		'user' in props ? (
			<UserAvatar user={props.user} />
		) : (
			<NewChatIcon className="rounded-full text-neutral-foreground-inverted" />
		);
	const name = 'user' in props ? props.user.fullName : props.name;

	return (
		<div
			className={twMerge(
				'flex h-12 cursor-pointer select-none items-center rounded px-3 py-2 text-sm text-neutral-foreground hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-neutral-800 active:dark:bg-neutral-900',
				isActive && 'bg-neutral-background-default'
			)}
		>
			{avatar}
			<span className="ml-2">{name}</span>
		</div>
	);
};
