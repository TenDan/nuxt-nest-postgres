import { User } from './../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from './../users/users.service';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: '3600s',
    }
  })],
  providers: [AuthService, UsersService, JwtStrategy, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
