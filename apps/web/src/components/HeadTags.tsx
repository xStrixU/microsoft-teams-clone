import { APP_NAME } from '@/lib/constants';
import { hellip } from '@/lib/utils';

type HeadTagsProps = Readonly<{
	title?: string;
	description?: string;
}>;

const titleSuffix = ` | ${APP_NAME}`;
const maxTitleLength = 60 - titleSuffix.length;
const maxDescriptionLength = 160;

export const HeadTags = ({
	title,
	description = `${APP_NAME} - Workspace for real-time collaboration and communication, meetings, file and app sharing, and even the occasional emoji!`,
}: HeadTagsProps) => {
	const formattedTitle = title ? `${hellip(title, maxTitleLength)}${titleSuffix}` : APP_NAME;
	const shortDescription = hellip(description, maxDescriptionLength);

	return (
		<>
			<title>{formattedTitle}</title>
			<meta name="description" content={shortDescription} />
		</>
	);
};
