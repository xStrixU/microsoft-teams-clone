import { ApiProperty } from '@nestjs/swagger';

export class OpenAPIHttpException {
	@ApiProperty()
	statusCode: number;

	@ApiProperty()
	message: string;

	@ApiProperty()
	error: string;
}
