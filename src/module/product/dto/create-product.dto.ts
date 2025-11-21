import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Regular flow pad', description: 'Product title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 5000, description: 'Price of product' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 4, description: 'Number of Pads' })
  @IsNumber()
  @IsNotEmpty()
  number_of_pad: number;

  @ApiProperty({
    example: 'Perfect for regular flow days',
    description: 'Product description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: ['5000'], description: 'Price of product' })
  @IsArray()
  @IsString({
    each: true,
  })
  @IsNotEmpty()
  content: string[];

  @ApiProperty({
    example: '1.2kg CO₂ saved per pack',
    description: 'Product environmental impact',
  })
  @IsString()
  @IsNotEmpty()
  environmental_impact: string;
}
