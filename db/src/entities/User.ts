import { IsInt, IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'public' })
export class UserEntity {
  @IsInt()
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @IsString()
  @Column('text', { name: 'first_name' })
  public firstName: string;

  @IsString()
  @Column('text', { name: 'last_name' })
  public lastName: string;

  @IsString()
  @Column('text', { name: 'email' })
  public email: string;

  @IsString()
  @Column('text', { name: 'password' })
  public password: string;

  public constructor(data?: Partial<UserEntity>) {
    if (data) {
      Object.assign(this, plainToClass(UserEntity, data));
    }
  }
}
