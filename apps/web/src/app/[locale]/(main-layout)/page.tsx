import { useTranslations } from 'next-intl';

const IndexPage = () => {
	const t = useTranslations('IndexPage');

	return <p className="text-neutral-foreground">{t('content')}</p>;
};

export default IndexPage;
