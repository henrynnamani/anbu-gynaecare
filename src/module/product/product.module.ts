import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './provider/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './model/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
