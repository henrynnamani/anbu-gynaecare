import { BaseEntity } from '@/shared/base.entity';
import { PeriodFlow, UserFeeling } from '@/shared/enum';
import { Column, Entity } from 'typeorm';

@Entity('cycle_logs')
export class CycleLog extends BaseEntity {
  @Column({ type: 'enum', enum: PeriodFlow })
  period_flow: PeriodFlow;

  @Column({ type: 'enum', enum: UserFeeling })
  feeling: UserFeeling;

  @Column({ type: 'simple-array', nullable: true })
  symptoms?: string[];
}
