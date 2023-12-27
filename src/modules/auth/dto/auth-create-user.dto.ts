import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthCreateUserDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'maks@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Username',
    example: 'Maks',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  username: string;

  @ApiProperty({
    description: 'Password',
    example: 'UserPassword',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 25)
  password: string;
}
