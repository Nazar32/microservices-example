import { IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoginPayload {
  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  password: string;

  public constructor(data?: Partial<LoginPayload>) {
    if (data) {
      Object.assign(this, plainToClass(LoginPayload, data));
    }
  }
}
