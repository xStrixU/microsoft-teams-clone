import { TeamsListHeader } from '@/components/TeamsListHeader';
import { UserTeamsList } from '@/components/UserTeamsList/UserTeamsList';

export const metadata = {
	title: 'Teams',
};

const TeamsPage = () => (
	<>
		<TeamsListHeader />
		<UserTeamsList />
	</>
);

export default TeamsPage;
