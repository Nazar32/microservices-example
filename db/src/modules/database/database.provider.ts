import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EasyconfigModule, EasyconfigService } from 'nestjs-easyconfig';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserEntity } from '../../entities/User';
/**
 * TypeORM PostgresSQL data provider
 */
export const postgresProvider: DynamicModule = TypeOrmModule.forRootAsync({
  imports: [EasyconfigModule],
  useFactory: (configService: EasyconfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: Number(configService.get('POSTGRES_PORT')),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DATABASE'),
    synchronize: Boolean(configService.get('POSTGRES_SYNC')),
    entities: [UserEntity],
    autoLoadEntities: true,
    logging: configService.get('NODE_ENV') === 'development' ? ['info'] : undefined,
    namingStrategy: new SnakeNamingStrategy()
  }),
  inject: [EasyconfigService]
});
