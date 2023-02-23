import { twMerge } from 'tailwind-merge';

import { ActiveLink } from './ActiveLink';

import ActivityIcon from '~/icons/activity.svg';
import CalendarIcon from '~/icons/calendar.svg';
import ChatIcon from '~/icons/chat.svg';
import TeamsIcon from '~/icons/teams.svg';

import { ACTIVITY_PATH, CALENDAR_PATH, CHAT_PATH, TEAMS_PATH } from '@/lib/paths';

import type { SVGComponent } from '@/types';

const navItems: { label: string; href: string; icon: SVGComponent }[] = [
	{
		label: 'Activity',
		href: ACTIVITY_PATH,
		icon: ActivityIcon,
	},
	{
		label: 'Chat',
		href: CHAT_PATH,
		icon: ChatIcon,
	},
	{
		label: 'Calendar',
		href: CALENDAR_PATH,
		icon: CalendarIcon,
	},
	{
		label: 'Teams',
		href: TEAMS_PATH,
		icon: TeamsIcon,
	},
];

export const Navbar = () => (
	<nav
		className={twMerge(
			'relative w-16 shrink-0 bg-neutral-background-5',
			'after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-r after:from-transparent after:to-neutral-400 after:opacity-20 dark:after:bg-none'
		)}
	>
		<ul>
			{navItems.map(({ label, href, icon: Icon }, i) => (
				<li key={i}>
					<ActiveLink
						href={href}
						activeClassName="text-brand-default dark:text-link-default fill-icon relative before:absolute before:h-12 before:w-0.5 before:bg-brand-default before:left-0.5 before:top-1/2 before:-translate-y-1/2"
						className="hover:fill-icon block h-14 text-center text-neutral-stroke-accessible-default hover:bg-neutral-background-hover hover:text-brand-default dark:hover:bg-neutral-background-pressed dark:hover:text-link-default"
					>
						<Icon className="inline h-10 w-10" />
						<span className="-mt-2 block text-xs">{label}</span>
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
