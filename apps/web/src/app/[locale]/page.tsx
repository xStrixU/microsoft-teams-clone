import { useTranslations } from 'next-intl';

import { PrivateRoute } from '@/components/PrivateRoute';

const IndexPage = () => {
	const t = useTranslations('IndexPage');

	return (
		<PrivateRoute>
			<p className="text-blue-600">{t('content')}</p>
		</PrivateRoute>
	);
};

export default IndexPage;
