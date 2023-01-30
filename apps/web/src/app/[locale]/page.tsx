import { useTranslations } from 'next-intl';

const IndexPage = () => {
	const t = useTranslations('IndexPage');

	return <p className="text-blue-600">{t('content')}</p>;
};

export default IndexPage;
