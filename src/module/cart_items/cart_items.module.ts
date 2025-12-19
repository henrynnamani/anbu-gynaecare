import { Module } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './model/cart_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])],
  controllers: [],
  providers: [CartItemsService],
  exports: [CartItemsService],
})
export class CartItemsModule {}
