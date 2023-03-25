import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type MessageProps = Readonly<{
	mine?: boolean;
	author?: string;
	date?: string;
	children: ReactNode;
}>;

export const Message = ({ mine = true, author, date, children }: MessageProps) => (
	<article
		className={twMerge(
			'flex w-fit flex-col rounded bg-red-300 py-2 px-4 text-sm text-neutral-foreground shadow',
			mine ? 'ml-auto bg-message-background-mine' : 'bg-message-background'
		)}
	>
		<div>
			{author && <span className="mr-5 font-bold">{author}</span>}
			{date && <span className="text-gray-600 dark:text-gray-300">{date}</span>}
		</div>
		{children}
	</article>
);
