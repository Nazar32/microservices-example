import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/loginDto';
import { LoginPayload } from './dto/loginPayload';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public async login({ username, password }: LoginPayload): Promise<LoginDto> {
    const userResult = await this.validateUser(username, password);
    return userResult;
  }

  private async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByUserName(username);
    if (user && user.password === password) {
      const { password: pass, ...result } = user;
      return result;
    }
    return null;
  }
}
