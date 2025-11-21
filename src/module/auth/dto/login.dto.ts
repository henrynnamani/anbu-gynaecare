import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'Rejoice anita' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Tyr@shfsdkfh902384' })
  @IsString()
  @IsStrongPassword({
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
  })
  password: string;
}
