import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository, User } from './../entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersService]
})
export class UsersModule {}
