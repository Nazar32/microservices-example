import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class UserPayload {
  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  username: string;

  public constructor(data?: Partial<UserPayload>) {
    if (data) {
      Object.assign(this, plainToClass(UserPayload, data));
    }
  }
}
