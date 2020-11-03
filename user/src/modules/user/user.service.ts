import { HttpService, Injectable } from '@nestjs/common';
import { UserPayload } from './dto/user.payload';
import { CreateUserPayload } from './dto/createUser.payload';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  public async getUserByUserName(payload: UserPayload): Promise<any> {
    return this.httpService
      .post(`/user-by-username`, {
        username: payload.username
      })
      .toPromise();
  }

  public async createUser(payload: CreateUserPayload): Promise<any> {
    return this.httpService.post(`/create`, payload).toPromise();
  }
}
