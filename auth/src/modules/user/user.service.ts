import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  public async getUserByUserName(username: string): Promise<any> {
    const { data } = await this.httpService
      .post('/user-by-username', {
        username
      })
      .toPromise();
    return data;
  }
}
