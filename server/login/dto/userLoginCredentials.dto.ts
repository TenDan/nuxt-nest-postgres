import { IsString } from "class-validator";

export class UserLoginCredentialsDto {

  @IsString()
  readonly username?: string;

  @IsString()
  readonly password: string;
}