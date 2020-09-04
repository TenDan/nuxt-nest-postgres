import { IsEmail, IsString, Length, Matches, ValidationOptions } from 'class-validator';

export class UserCredentialsDto {

  @IsString({
    message: "Nazwa powinna zawierać litery."
  })
  @Length(5, 60, {
    message: "Nazwa użytkownika powinna być dłuższa niż 5 znaków i krótsza niż 60 znaków."
  })
  readonly username: string;

  @IsString()
  @IsEmail({}, {
    message: "Adres e-mail musi być e-mailem."
  })
  readonly email: string;

  @IsString()
  @Length(8, 40, {
    message: "Hasło musi być dłuższe niż 8 znaków i krótsze niż 60."
  })
  readonly password: string;
}