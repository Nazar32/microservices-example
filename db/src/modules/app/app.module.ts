import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { LoggerModule } from 'nestjs-pino';
import { postgresProvider } from '../database/database.provider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [LoggerModule.forRoot(), EasyconfigModule.register({ path: '.env' }), postgresProvider, UserModule]
})
export class AppModule {}
