import { Input } from '../ui/Inputs/Input/Input';

import SendIcon from '~/icons/send.svg';

export const MessageInput = () => (
	<form className="mt-auto flex w-full flex-col">
		<Input placeholder="Type a new message" />
		<button
			type="submit"
			className="hover:fill-icon ml-auto w-fit p-2 text-neutral-foreground hover:text-brand-default dark:hover:text-link-default"
			title="Send"
		>
			<SendIcon />
		</button>
	</form>
);
