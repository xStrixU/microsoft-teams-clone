import { JoinOrCreateTeamHeader } from '@/components/JoinOrCreateTeamHeader';
import { CreateTeamCard } from '@/components/TeamActionCard/CreateTeamCard/CreateTeamCard';
import { JoinTeamByCodeCard } from '@/components/TeamActionCard/JoinTeamByCodeCard';

const JoinOrCreateTeamPage = () => (
	<>
		<JoinOrCreateTeamHeader />
		<div className="mt-6 flex gap-4">
			<CreateTeamCard />
			<JoinTeamByCodeCard />
		</div>
	</>
);

export default JoinOrCreateTeamPage;
