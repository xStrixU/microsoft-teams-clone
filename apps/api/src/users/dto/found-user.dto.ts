import { OmitType } from '@nestjs/swagger';

import { UserDto } from './user.dto';

export class FoundUserDto extends OmitType(UserDto, ['email']) {}
