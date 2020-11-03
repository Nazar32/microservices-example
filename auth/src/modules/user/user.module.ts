import { HttpModule, Module } from '@nestjs/common';
import { EasyconfigService } from 'nestjs-easyconfig';
import { Logger } from '@nestjs/common';
import { UserService } from './user.service';

const config = new EasyconfigService({
  logger: Logger,
  path: '.env'
});

@Module({
  imports: [
    HttpModule.register({
      baseURL: config.get('USER_SERVICE_URL'),
      timeout: 5000,
      maxRedirects: 5
    })
  ],
  exports: [UserService],
  providers: [UserService]
})
export class UserModule {}
