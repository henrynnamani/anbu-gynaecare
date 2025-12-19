import { CartItem } from '@/module/cart_items/model/cart_item.entity';
import { User } from '@/module/users/model/user.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('carts')
export class Cart extends BaseEntity {
  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn()
  user: User;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, { eager: true })
  cartItems: CartItem[];
}
