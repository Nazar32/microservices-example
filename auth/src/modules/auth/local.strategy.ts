import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../entities/User';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<LoginDto> {
    const user = await this.authService.login({ username, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
