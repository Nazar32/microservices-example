import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserEntity } from '../../entities/User';
import { UserService } from './user.service';
import { CreateUserPayload } from './dto/createUser.payload';
import { UserPayload } from './dto/user.payload';

@Controller()
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post('/user-by-username')
  @HttpCode(200)
  async login(@Body() payload: UserPayload): Promise<UserEntity | null> {
    return this.userService.getUserByUserName(payload.username);
  }

  @Post('/create')
  @HttpCode(200)
  async create(@Body() payload: CreateUserPayload): Promise<UserEntity | null> {
    return this.userService.create(payload);
  }
}
