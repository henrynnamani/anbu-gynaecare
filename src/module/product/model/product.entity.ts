import { CartItem } from '@/module/cart_items/model/cart_item.entity';
import { Cart } from '@/module/carts/model/cart.entity';
import { OrderItem } from '@/module/order_items/model/order_items.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  number_of_pad: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'simple-array' })
  content: string[];

  @Column({ type: 'varchar' })
  environmental_impact: string;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: CartItem[];
}
