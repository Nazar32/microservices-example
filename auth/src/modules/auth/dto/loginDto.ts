import { IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class LoginDto {
  @IsString()
  accessToken: string;

  public constructor(data?: Partial<LoginDto>) {
    if (data) {
      Object.assign(this, plainToClass(LoginDto, data));
    }
  }
}
