import { Controller, HttpCode, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @HttpCode(200)
  async login(@Request() req): Promise<LoginDto> {
    return this.authService.login(req.user);
  }
}
