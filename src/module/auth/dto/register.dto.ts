import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Rejoice anita' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'anita@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'PPyrsdfhksf3@sdf834' })
  @IsString()
  @IsStrongPassword({
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
  })
  password: string;

  @ApiPropertyOptional({ example: 5, type: 'number' })
  @IsNumber()
  @IsOptional()
  age?: number;
}
