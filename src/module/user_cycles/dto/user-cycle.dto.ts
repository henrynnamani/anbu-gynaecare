import {
  DietType,
  ExerciseFrequency,
  FlowDescription,
  SleepQuality,
  StressLevel,
  TrackingGoal,
} from '@/shared/enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SetUserCycleDto {
  @ApiProperty({ type: 'number', example: 28, description: 'Cycle length' })
  @IsNumber()
  @IsNotEmpty()
  cycle_length: number;

  @ApiProperty({
    type: 'number',
    example: 5,
    description: 'Number of period days',
  })
  @IsNumber()
  @IsNotEmpty()
  period_length: number;

  @ApiProperty({
    type: 'number',
    example: '1995-10-03',
    description: 'Date last period started',
  })
  @IsDateString()
  @IsNotEmpty()
  last_period_start: Date;

  @ApiProperty({
    enum: FlowDescription,
    example: FlowDescription.LIGHT,
    description: 'Number of period days',
  })
  @IsEnum(FlowDescription)
  @IsNotEmpty()
  flow_description: FlowDescription;

  @ApiProperty({
    type: 'array',
    example: ['cramps', 'bloat'],
    description: 'Symptoms felt during menstruation',
  })
  @IsArray()
  @IsString({
    each: true,
  })
  @IsNotEmpty()
  symptoms: string[];

  @IsArray()
  @IsString({
    each: true,
  })
  @IsNotEmpty()
  irregularities: string[];

  @IsArray()
  @IsString({
    each: true,
  })
  @IsOptional()
  conditions: string[];

  @IsEnum(TrackingGoal)
  @IsNotEmpty()
  goal: TrackingGoal;

  @IsEnum(StressLevel)
  @IsNotEmpty()
  stress: StressLevel;

  @IsEnum(SleepQuality)
  @IsNotEmpty()
  sleep_quality: SleepQuality;

  @IsEnum(ExerciseFrequency)
  @IsNotEmpty()
  exercise: ExerciseFrequency;

  @IsEnum(DietType)
  @IsNotEmpty()
  diet: DietType;
}
