import { useTranslations } from 'next-intl';

import { EntryFormBox } from '../EntryFormBox';
import { SignUpForm } from './SignUpForm';

import { Link } from '@/components/ui/Link';

import { SIGN_IN_PATH } from '@/lib/paths';

export const SignUpFormBox = () => {
	const t = useTranslations('entryForms');
	const tSchema = useTranslations('schema');

	return (
		<EntryFormBox
			title={t('SignUpForm.title')}
			bottomSection={
				<>
					{t('SignUpForm.bottomSection')} <Link href={SIGN_IN_PATH}>{t('common.signIn')}</Link>
				</>
			}
		>
			<SignUpForm
				messages={{
					firstName: t('common.firstName'),
					lastName: t('common.lastName'),
					email: t('common.email'),
					password: t('common.password'),
					confirmPassword: t('common.confirmPassword'),
					signUp: t('common.signUp'),
					signedUp: t('SignUpForm.signedUp'),
					schema: {
						required: tSchema('required'),
						invalidEmail: tSchema('invalidEmail'),
						invalidPassword: tSchema('invalidPassword'),
						passwordsDoNotMatch: t('schema.passwordsDoNotMatch'),
					},
				}}
			/>
		</EntryFormBox>
	);
};
