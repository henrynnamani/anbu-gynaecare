import { Cart } from '@/module/carts/model/cart.entity';
import { CycleLog } from '@/module/cycle_logs/model/cycle_log.entity';
import { Order } from '@/module/orders/model/order.entity';
import { UserCycle } from '@/module/user_cycles/model/user_cycle.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

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

  @OneToMany(() => CycleLog, (log) => log.user)
  logs: CycleLog[];

  @OneToOne(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart
}
