import { UserCycle } from '@/module/user_cycles/model/user_cycle.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'decimal', nullable: true })
  age: number;

  @OneToOne(() => UserCycle, (user_cycle) => user_cycle.user)
  cycle: UserCycle;
}
