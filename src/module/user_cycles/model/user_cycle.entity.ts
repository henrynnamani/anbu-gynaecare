import { BaseEntity } from '@/shared/base.entity';
import {
  DietType,
  ExerciseFrequency,
  FlowDescription,
  SleepQuality,
  StressLevel,
  TrackingGoal,
} from '@/shared/enum';
import { Column, Entity } from 'typeorm';

@Entity('user_cycles')
export class UserCycle extends BaseEntity {
  @Column({ type: 'int', default: 28 })
  cycle_length: number;

  @Column({ type: 'int', default: 5 })
  period_length: number;

  @Column({ type: 'date' })
  last_period_start: Date;

  @Column({ type: 'enum', enum: FlowDescription, nullable: false })
  flow_description: FlowDescription;

  @Column({ type: 'simple-array' })
  symptoms: string[];

  @Column({ type: 'simple-array' })
  irregularities: string[];

  @Column({ type: 'simple-array', nullable: true })
  condition: string[];

  @Column({ type: 'enum', enum: TrackingGoal })
  goal: TrackingGoal;

  @Column({ type: 'enum', enum: StressLevel })
  stress: StressLevel;

  @Column({ type: 'enum', enum: SleepQuality })
  sleep_quality: SleepQuality;

  @Column({ type: 'enum', enum: ExerciseFrequency })
  exercise: ExerciseFrequency;

  @Column({ type: 'enum', enum: DietType })
  diet: DietType;
}
