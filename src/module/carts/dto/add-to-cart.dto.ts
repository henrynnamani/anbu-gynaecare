import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({
    type: 'array',
    example: [{ productId: 'string', quantity: 1, amount: 100 }],
  })
  @IsArray()
  products: {
    productId: string;
    quantity: number;
    amount: number;
  }[];
}
