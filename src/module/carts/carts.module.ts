import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './model/cart.entity';
import { CartItemsModule } from '../cart_items/cart_items.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), CartItemsModule],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
