import { PeriodFlow, UserFeeling } from '../enum';

export interface ICycleLog {
  period_flow: PeriodFlow;
  feeling: UserFeeling;
  symptoms?: string[];
}
