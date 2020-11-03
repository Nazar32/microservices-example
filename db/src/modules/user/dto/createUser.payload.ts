import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class CreateUserPayload {
  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    required: true
  })
  @IsString()
  password: string;

  public constructor(data?: Partial<CreateUserPayload>) {
    if (data) {
      Object.assign(this, plainToClass(CreateUserPayload, data));
    }
  }
}
