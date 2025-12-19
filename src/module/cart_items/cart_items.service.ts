import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './model/cart_item.entity';
import { Repository } from 'typeorm';
import { ICartItem } from '@/shared/types/cart';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async productAlreadyAdded(productId: string, cartId: string) {
    try {
      const record = await this.cartItemRepository.findOne({
        where: { cart: { id: cartId }, product: { id: productId } },
      });

      return record;
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  async addCartItem(cartItem: ICartItem): Promise<CartItem> {
    try {
      let record = await this.productAlreadyAdded(
        cartItem.productId,
        cartItem.cartId!,
      );

      if (record) {
        record.quantity += 1;
        record.amount = record.quantity * cartItem.amount;
      } else {
        record = this.cartItemRepository.create({
          ...cartItem,
          product: { id: cartItem.productId },
          cart: { id: cartItem.cartId },
        });
      }

      await this.cartItemRepository.save(record);

      return record;
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  async removeCartItems(cartItems: CartItem[]) {
    try {
      await this.cartItemRepository.remove(cartItems);
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }
}
