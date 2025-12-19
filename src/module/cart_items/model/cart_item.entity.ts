import { Cart } from '@/module/carts/model/cart.entity';
import { Product } from '@/module/product/model/product.entity';
import { BaseEntity } from '@/shared/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('cart_items')
export class CartItem extends BaseEntity {
  @ManyToOne(() => Cart, (cart) => cart.cartItems)
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Product;

  @Column({ type: 'int', nullable: false })
  amount: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;
}
