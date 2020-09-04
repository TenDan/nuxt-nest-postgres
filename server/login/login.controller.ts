import { AuthService } from './../auth/auth.service';
import { LocalAuthGuard } from './../auth/local-auth.guard';
import { UserLoginCredentialsDto } from './dto/userLoginCredentials.dto';
import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';

@Controller('login')
export class LoginController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async logInUser(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
