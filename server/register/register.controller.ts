import { UsersService } from './../users/users.service';
import { UserCredentialsDto } from './dto/userCredentials.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  async registerUser(@Body() userCredentials: UserCredentialsDto) {
    return this.usersService.create(userCredentials);
  }
}
