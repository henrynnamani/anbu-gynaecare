import { PeriodFlow, UserFeeling } from '@/shared/enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class LogDto {
  @ApiProperty({ enum: PeriodFlow, example: PeriodFlow.HEAVY })
  @IsEnum(PeriodFlow)
  @IsNotEmpty()
  period_flow: PeriodFlow;

  @ApiProperty({ enum: UserFeeling, example: UserFeeling.IRRITABLE })
  @IsEnum(UserFeeling)
  @IsNotEmpty()
  feeling: UserFeeling;

  @ApiProperty({ type: 'array', example: ['PCOS', 'gastrointestinal'] })
  @IsArray()
  @IsString({
    each: true,
  })
  @IsOptional()
  symptoms?: string[];
}
