import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/User';
import { CreateUserPayload } from './dto/createUser.payload';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  public async getUserByUserName(username: string): Promise<UserEntity | null> {
    const user = await this.userRepo.findOne({
      firstName: username
    });

    return user ?? null;
  }

  public async create(payload: CreateUserPayload): Promise<UserEntity | null> {
    const user = await this.userRepo.save({ ...payload });

    return user ?? null;
  }
}
