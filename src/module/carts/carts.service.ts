import { ICartItem } from '@/shared/types/cart';
import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { CartItemsService } from '../cart_items/cart_items.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './model/cart.entity';
import { Repository } from 'typeorm';
import * as SYS_MSG from '@/shared/system-message';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly cartItemService: CartItemsService,
  ) {}

  async cartExist(userId: string) {
    try {
      const record = await this.cartRepository.findOne({
        where: { user: { id: userId } },
      });

      return record;
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  async addToCart(userId: string, products: ICartItem[]) {
    let userCart = await this.cartExist(userId);

    if (!userCart) {
      userCart = await this.cartRepository.save(
        this.cartRepository.create({
          user: { id: userId },
          cartItems: [],
        }),
      );
    }

    try {
      console.log(userCart);
      const entities = await Promise.all(
        products.map((product) =>
          this.cartItemService.addCartItem({
            ...product,
            cartId: userCart?.id,
          }),
        ),
      );

      userCart.cartItems = entities;

      await this.cartRepository.save(userCart);

      return {
        message: SYS_MSG.CART_CREATED_SUCCESSFULLY,
        data: userCart,
      };
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }

  async clearCart(userId: string) {
    try {
      const cart = await this.cartRepository.findOne({
        where: { user: { id: userId } },
      });

      if (!cart) {
        throw new RequestTimeoutException('Cart not found');
      }

      await this.cartItemService.removeCartItems(cart.cartItems);

      await this.cartRepository.update(cart.id, {
        cartItems: [],
      });

      return {
        message: SYS_MSG.CART_CLEARED_SUCCESSFULLY,
        data: cart,
      };
    } catch (error) {
      throw new RequestTimeoutException(error);
    }
  }
}
