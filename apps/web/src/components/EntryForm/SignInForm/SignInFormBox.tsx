import { EntryFormBox } from '../EntryFormBox';
import { SignInForm } from './SignInForm';

import { Link } from '@/components/ui/Link';

import { SIGN_UP_PATH } from '@/lib/paths';

export const SignInFormBox = () => (
	<EntryFormBox
		title="Log in to your account"
		bottomSection={
			<>
				{"Don't"} have an account? <Link href={SIGN_UP_PATH}>Sign Up</Link>
			</>
		}
	>
		<SignInForm />
	</EntryFormBox>
);
