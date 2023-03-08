import { EntryFormBox } from '../EntryFormBox';
import { SignUpForm } from './SignUpForm';

import { Link } from '@/components/ui/Link';

export const SignUpFormBox = () => (
	<EntryFormBox
		title="Create an account"
		bottomSection={
			<>
				Already have an account? <Link href="/sign-in">Sign In</Link>
			</>
		}
	>
		<SignUpForm />
	</EntryFormBox>
);
