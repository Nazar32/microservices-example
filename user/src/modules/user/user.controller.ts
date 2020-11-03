import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { User } from '../../entities/User';
import { UserService } from './user.service';
import { UserPayload } from './dto/user.payload';
import { CreateUserPayload } from './dto/createUser.payload';

@Controller()
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post('/user-by-username')
  @HttpCode(200)
  async login(@Body() payload: UserPayload): Promise<User | null> {
    const { data } = await this.userService.getUserByUserName(payload);
    return data;
  }

  @Post('/create')
  @HttpCode(200)
  async create(@Body() payload: CreateUserPayload): Promise<User | null> {
    const { data } = await this.userService.createUser(payload);
    return data;
  }
}
