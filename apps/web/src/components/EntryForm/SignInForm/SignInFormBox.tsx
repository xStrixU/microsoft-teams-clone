import NextLink from 'next/link';
import { Link } from 'ui';

import { EntryFormBox } from '../EntryFormBox';
import { SignInForm } from './SignInForm';

export const SignInFormBox = () => (
	<EntryFormBox
		title="Log in to your account"
		bottomSection={
			<>
				{"Don't"} have an account?{' '}
				<Link as={NextLink} href="/sign-up">
					Sign Up
				</Link>
			</>
		}
	>
		<SignInForm />
	</EntryFormBox>
);
