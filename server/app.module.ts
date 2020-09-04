import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuxtController } from './nuxt/nuxt.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UsersModule, PostsModule, RegisterModule],
  controllers: [AppController, LoginController, RegisterController, NuxtController],
  providers: [AppService],
})
export class AppModule {}
