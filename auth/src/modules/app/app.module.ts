import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [LoggerModule.forRoot(), EasyconfigModule.register({ path: '.env' }), AuthModule, UserModule]
})
export class AppModule {}
