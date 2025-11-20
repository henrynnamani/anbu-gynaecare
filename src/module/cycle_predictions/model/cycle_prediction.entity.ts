import { UserCycle } from '@/module/user_cycles/model/user_cycle.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('cycle_predictions')
export class CyclePrediction extends BaseEntity {
  @ManyToOne(() => UserCycle, (user_cycle) => user_cycle.predictions)
  user_cycle: UserCycle;

  @Column({ type: 'date' })
  predicted_period_start: Date;

  @Column({ type: 'date' })
  predicted_period_end: Date;

  @Column({ type: 'date' })
  predicted_ovulation: Date; // -14
}
