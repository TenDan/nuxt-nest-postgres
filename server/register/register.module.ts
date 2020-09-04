import { RegisterController } from './register.controller';
import { UsersModule } from './../users/users.module';
import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  controllers: [RegisterController]
})
export class RegisterModule {}
