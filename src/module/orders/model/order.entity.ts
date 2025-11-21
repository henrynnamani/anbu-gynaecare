import { OrderItem } from '@/module/order_items/model/order_items.entity';
import { User } from '@/module/users/model/user.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('orders')
export class Order extends BaseEntity {
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}
