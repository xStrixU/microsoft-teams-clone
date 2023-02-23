import Link from 'next/link';

import { CreateTeamCard } from '@/components/TeamActionCard/CreateTeamCard/CreateTeamCard';
import { JoinTeamByCodeCard } from '@/components/TeamActionCard/JoinTeamByCodeCard';

import { TEAMS_PATH } from '@/lib/paths';

const JoinOrCreateTeamPage = () => (
	<div className="py-4 px-6">
		<Link
			href={TEAMS_PATH}
			className="mb-2 block w-fit text-neutral-foreground hover:text-link-hover"
		>
			Back
		</Link>
		<h1 className="mb-6 text-2xl font-semibold text-neutral-foreground">Join or create a team</h1>
		<div className="flex gap-4">
			<CreateTeamCard />
			<JoinTeamByCodeCard />
		</div>
	</div>
);

export default JoinOrCreateTeamPage;
