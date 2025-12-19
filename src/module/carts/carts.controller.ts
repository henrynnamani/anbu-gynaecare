import { Body, Controller, Post } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartsService } from './carts.service';
import { LoggedInUser } from '../auth/decorator/current-user.decorator';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  @ApiBody({ type: AddToCartDto })
  @ApiBearerAuth()
  addToCart(
    @LoggedInUser('id') id: string,
    @Body() addToCartDto: AddToCartDto,
  ) {
    return this.cartsService.addToCart(id, addToCartDto.products);
  }

  @ApiBearerAuth()
  @Post('clear')
  clearCart(@LoggedInUser('id') id: string) {
    return this.cartsService.clearCart(id);
  }
}
