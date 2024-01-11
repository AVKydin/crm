import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ERole } from '../../../../common/enum /role.enum';
// import { IsAllowedRoleAdmin } from '../common/validators/is-allowed-role-admin.validator';

const telegramRegex = /^.{3,}$/; // Замініть на ваш власний регулярний вираз

export class ManagerCreateReqDto {
  @Transform(({ value }) => value.trim().toLowerCase())
  @MinLength(2)
  @MaxLength(20)
  @Transform(({ value }) => value.trim())
  @IsString()
  userName: string;

  @Transform(({ value }) => value.trim().toLowerCase())
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(3)
  @Transform(({ value }) => value.trim())
  @IsString()
  @Matches(telegramRegex, {
    message: 'Invalid format.',
  })
  telegram: string;

  @Transform(({ value }) => value.trim().toLowerCase())
  @IsString()
  role: ERole;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  password: string;
}
