import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(1, 255)
  username: string;

  @IsString()
  profilePictureUrl: string;

  @IsString()
  @Length(1, 255)
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 255)
  @IsStrongPassword()
  password: string;
}
