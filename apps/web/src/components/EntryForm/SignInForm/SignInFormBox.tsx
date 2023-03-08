import { EntryFormBox } from '../EntryFormBox';
import { SignInForm } from './SignInForm';

import { Link } from '@/components/ui/Link';

export const SignInFormBox = () => (
	<EntryFormBox
		title="Log in to your account"
		bottomSection={
			<>
				{"Don't"} have an account? <Link href="/sign-up">Sign Up</Link>
			</>
		}
	>
		<SignInForm />
	</EntryFormBox>
);
