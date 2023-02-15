import { useTranslations } from 'next-intl';

import { EntryFormBox } from '../EntryFormBox';
import { SignInForm } from './SignInForm';

import { Link } from '@/components/ui/Link';

import { SIGN_UP_PATH } from '@/lib/paths';

export const SignInFormBox = () => {
	const t = useTranslations('entryForms');
	const tSchema = useTranslations('schema');

	return (
		<EntryFormBox
			title={t('SignInForm.title')}
			bottomSection={
				<>
					{t('SignInForm.bottomSection')} <Link href={SIGN_UP_PATH}>{t('common.signUp')}</Link>
				</>
			}
		>
			<SignInForm
				messages={{
					email: t('common.email'),
					password: t('common.password'),
					signIn: t('common.signIn'),
					schema: {
						required: tSchema('required'),
					},
				}}
			/>
		</EntryFormBox>
	);
};
