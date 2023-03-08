'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { FoundUsersList } from './FoundUsersList/FoundUsersList';
import { SelectedUser } from './SelectedUser';

import GroupIcon from '~/icons/group.svg';

import { useDebounce } from '@/hooks/useDebounce';

import type { ChangeEvent } from 'react';

import type { FoundUser } from '@/types';

export const NewChatHeader = () => {
	const [toInputValue, setToInputValue] = useState('');
	const [isToInputFocused, setIsToInputFocused] = useState(false);
	const [isToInputChanging, setIsToInputChanging] = useState(false);
	const [isGroupNameOpen, setIsGroupNameOpen] = useState(false);
	const [isGroupNameInputFocus, setIsGroupNameInputFocus] = useState(false);
	const [groupNameInputValue, setGroupNameInputValue] = useState('');
	const [users, setUsers] = useState<FoundUser[]>([]);

	const debouncedInputValue = useDebounce(toInputValue, 500);

	const handleToInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setToInputValue(target.value);
		setIsToInputChanging(true);
	};

	useEffect(() => setIsToInputChanging(false), [debouncedInputValue]);

	const handleFoundUserClick = (user: FoundUser) => {
		setToInputValue('');
		setUsers([user, ...users]);
	};

	const handleRemoveSelectedUser = (user: FoundUser) => {
		const filteredUsers = users.filter(({ id }) => user.id !== id);

		setUsers(filteredUsers);
	};

	return (
		<div className="bg-neutral-background-default text-sm text-black dark:text-neutral-200">
			{isGroupNameOpen && users.length > 1 && (
				<label
					className={twMerge(
						'relative flex h-16 items-center gap-2 px-8 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-neutral-stroke-disabled after:px-4',
						isGroupNameInputFocus && 'after:bg-brand-default'
					)}
				>
					<span className="shrink-0">Group name:</span>
					<input
						type="text"
						value={groupNameInputValue}
						onFocus={() => setIsGroupNameInputFocus(true)}
						onBlur={() => setIsGroupNameInputFocus(false)}
						onChange={({ target }) => setGroupNameInputValue(target.value)}
						className="h-full grow outline-none placeholder:text-inherit"
					/>
				</label>
			)}
			<div
				className={twMerge(
					'flex h-16 w-full items-center border-b-2 border-transparent  px-8',
					isToInputFocused && 'border-brand-default'
				)}
			>
				<div className="flex items-center gap-2">
					To:
					{users.map(user => (
						<SelectedUser key={user.id} user={user} handleRemove={handleRemoveSelectedUser} />
					))}
				</div>
				<div className="relative ml-2 h-full grow border-red-300">
					<input
						type="text"
						placeholder="Enter name or email"
						value={toInputValue}
						onChange={handleToInputChange}
						onFocus={() => setIsToInputFocused(true)}
						onBlur={() => setIsToInputFocused(false)}
						className="h-full w-full bg-transparent outline-none placeholder:text-inherit"
					/>
					{toInputValue && (
						<FoundUsersList
							isChanging={isToInputChanging}
							value={debouncedInputValue}
							selectedUsers={users}
							handleFoundUserClick={handleFoundUserClick}
						/>
					)}
				</div>
				{users.length > 1 && (
					<button
						onClick={() => setIsGroupNameOpen(!isGroupNameOpen)}
						className="hover:fill-icon flex gap-3 py-3 text-xs font-bold text-neutral-foreground hover:text-brand-default"
					>
						<GroupIcon /> Add group name
					</button>
				)}
			</div>
		</div>
	);
};
