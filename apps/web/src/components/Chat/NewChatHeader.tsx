'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const NewChatHeader = () => {
	const [isToInputFocused, setIsToInputFocused] = useState(false);

	return (
		<div
			className={twMerge(
				'flex h-16 w-full items-center border-b-2 border-transparent bg-neutral-background-default px-8 text-sm text-black dark:text-neutral-200',
				isToInputFocused && 'border-brand-default'
			)}
		>
			<label className="flex h-full grow items-center">
				To:
				<input
					type="text"
					placeholder="Enter name, email or phone number"
					onFocus={() => setIsToInputFocused(true)}
					onBlur={() => setIsToInputFocused(false)}
					className="ml-2 h-full grow bg-transparent outline-none placeholder:text-inherit"
				/>
			</label>
		</div>
	);
};
