import NextLink from 'next/link';
import { Link } from 'ui';

import { EntryFormBox } from '../EntryFormBox';
import { SignUpForm } from './SignUpForm';

export const SignUpFormBox = () => (
	<EntryFormBox
		title="Create an account"
		bottomSection={
			<>
				Already have an account?{' '}
				<Link as={NextLink} href="/sign-in">
					Sign In
				</Link>
			</>
		}
	>
		<SignUpForm />
	</EntryFormBox>
);
