import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { LoggerModule } from 'nestjs-pino';
import { UserModule } from '../user/user.module';

@Module({
  imports: [LoggerModule.forRoot(), EasyconfigModule.register({ path: '.env' }), UserModule]
})
export class AppModule {}
