import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './provider/product.service';
import { IProduct } from '@/shared/types/product';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { createProductDoc } from './doc/product.doc';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @createProductDoc()
  @Post('')
  createProduct(@Body() productData: CreateProductDto) {
    return this.productService.createProduct(productData);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all product' })
  @Get('')
  getProducts() {
    return this.productService.getAllProduct();
  }
}
