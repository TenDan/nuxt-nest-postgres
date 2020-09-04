import { UserCredentialsDto } from './../register/dto/userCredentials.dto';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UnauthenticatedException } from '../utils/exceptions/unauthenticated.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username }, [
      'uuid',
      'username',
      'password',
    ]);

    if (!user)
      throw new UnauthenticatedException({
        statusCode: 401,
        message: [
          {
            target: { username, password },
            value: username,
            property: 'username',
            constraints: {
              wrongCredential: 'Użytkownik o podanej nazwie nie istnieje',
            },
          },
        ],
        error: 'Unauthenticated',
      });

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (user && passwordIsCorrect) {
      const { password: hashedPassword, ...result } = user;
      return result;
    }

    throw new UnauthenticatedException({
      statusCode: 401,
      message: [
        {
          target: { username, password },
          value: password,
          property: 'password',
          constraints: {
            wrongCredential: 'Złe hasło',
          },
        },
      ],
      error: 'Unauthenticated',
    });
  }

  async register(userData: UserCredentialsDto): Promise<any> {
    return await this.usersService.create(userData);
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET
      })
    }
  }
}
