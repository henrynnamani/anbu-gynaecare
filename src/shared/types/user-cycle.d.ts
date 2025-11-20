import {
  DietType,
  ExerciseFrequency,
  FlowDescription,
  SleepQuality,
  StressLevel,
  TrackingGoal,
} from '../enum';

export interface IUserCycle {
  cycle_length: number;
  period_length: number;
  last_period_start: Date;
  flow_description: FlowDescription;
  symptoms: string[];
  irregularities: string[];
  conditions?: string[];
  goal: TrackingGoal;
  stress: StressLevel;
  sleep_quality: SleepQuality;
  exercise: ExerciseFrequency;
  diet: DietType;
}
