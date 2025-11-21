import { Order } from '@/module/orders/model/order.entity';
import { Product } from '@/module/product/model/product.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('order_items')
export class OrderItem extends BaseEntity {
  @ManyToOne(() => Product)
  product: Product;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @Column({ type: 'decimal', nullable: false })
  price: number;

  @Column({ type: 'decimal', nullable: false })
  subtotal: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}   
