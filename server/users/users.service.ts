import { UserCredentialsDto } from './../register/dto/userCredentials.dto';
import { User, UserRepository } from './../entities/user.entity';
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ValidationError } from 'class-validator';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(
    { uuid, username }: { uuid?: string; username?: string },
    select: (
      | 'uuid'
      | 'username'
      | 'email'
      | 'password'
      | 'createdAt'
      | 'updatedAt'
      | 'posts'
    )[] = ['uuid', 'username', 'createdAt', 'updatedAt'],
    // select: FindOneOptions<User>.select
  ): Promise<User> {
    if (uuid) {
      return this.usersRepository.findOne({
        where: {
          uuid,
        },
        select,
      });
    } else if (username) {
      return this.usersRepository.findOne({
        where: {
          username
        },
        select
      })
    }
  }

  async create(userCredentials: UserCredentialsDto): Promise<any> {
    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(
      userCredentials.password.toString(),
      salt,
    );

    const userToCreate = this.usersRepository.create({
      ...userCredentials,
      password,
    });

    const userWithThatUsernameExists = await this.usersRepository.findOne({
      where: {
        username: userToCreate.username,
      },
    });

    if (userWithThatUsernameExists)
      throw new ConflictException({
        statusCode: 409,
        message: [
          {
            target: userCredentials,
            value: userCredentials.username,
            property: 'username',
            constraints: {
              notUnique: 'Użytkownik o takiej nazwie już istnieje.',
            },
          },
        ],
        error: 'Conflict',
      });

    const userWithThatEmailExists = await this.usersRepository.findOne({
      where: {
        email: userToCreate.email,
      },
    });

    if (userWithThatEmailExists)
      throw new ConflictException({
        statusCode: 409,
        message: [
          {
            target: userCredentials,
            value: userCredentials.email,
            property: 'email',
            constraints: {
              notUnique: 'Użytkownik o takim adresie e-mail już istnieje.',
            },
          },
        ],
        error: 'Conflict',
      });

    this.usersRepository.save([userToCreate]);

    const { password: hashedPassword, ...userFinalData } = userToCreate;

    return userFinalData;
  }
}
