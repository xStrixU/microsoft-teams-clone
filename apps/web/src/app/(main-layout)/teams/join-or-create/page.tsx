import Link from 'next/link';

import { CreateTeamCard } from '@/components/TeamActionCard/CreateTeamCard/CreateTeamCard';
import { JoinTeamByCodeCard } from '@/components/TeamActionCard/JoinTeamByCodeCard';

const JoinOrCreateTeamPage = () => (
	<div className="py-4 px-6">
		<Link href="/teams" className="mb-2 block w-fit hover:text-link-hover">
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
