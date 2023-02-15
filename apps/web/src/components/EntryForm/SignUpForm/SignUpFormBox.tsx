import { EntryFormBox } from '../EntryFormBox';
import { SignUpForm } from './SignUpForm';

import { Link } from '@/components/ui/Link';

import { SIGN_IN_PATH } from '@/lib/paths';

export const SignUpFormBox = () => (
	<EntryFormBox
		title="Create an account"
		bottomSection={
			<>
				Already have an account? <Link href={SIGN_IN_PATH}>Sign In</Link>
			</>
		}
	>
		<SignUpForm />
	</EntryFormBox>
);
