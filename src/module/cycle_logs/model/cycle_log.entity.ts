import { User } from '@/module/users/model/user.entity';
import { BaseEntity } from '@/shared/base.entity';
import { PeriodFlow, UserFeeling } from '@/shared/enum';
import { BeforeInsert, Column, Entity, ManyToOne } from 'typeorm';

@Entity('cycle_logs')
export class CycleLog extends BaseEntity {
  @ManyToOne(() => User, (user) => user.logs)
  user: User;

  @Column({ type: 'enum', enum: PeriodFlow })
  period_flow: PeriodFlow;

  @Column({ type: 'date', default: () => 'CURRENT_DATE', nullable: true })
  log_date: Date;

  @Column({ type: 'enum', enum: UserFeeling })
  feeling: UserFeeling;

  @Column({ type: 'simple-array', nullable: true })
  symptoms?: string[];
}
