import { HeaderUserAvatar } from './HeaderUserAvatar';
import { UserDropdownMenu } from './UserDropdownMenu/UserDropdownMenu';

import { APP_NAME } from '@/lib/constants';

export const Header = () => (
	<header className="flex h-header shrink-0 items-center justify-between bg-brand-selected pl-20 pr-4 dark:bg-neutral-background-5">
		<p className="text-sm font-bold text-white">{APP_NAME}</p>
		<UserDropdownMenu>
			<HeaderUserAvatar />
		</UserDropdownMenu>
	</header>
);
