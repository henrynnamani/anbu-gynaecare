import { ModelAction } from '@/shared/action.model';
import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { Product } from '../model/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProduct } from '@/shared/types/product';
import * as SYS_MSG from '@/shared/system-message';

@Injectable()
export class ProductService {
  private modelAction: ModelAction<Product>;

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    this.modelAction = new ModelAction(productRepository);
  }

  async createProduct(data: IProduct) {
    try {
      const record = await this.modelAction.create(data);

      return {
        message: SYS_MSG.PRODUCT_CREATED_SUCCESSFULLY,
        data: record,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async getAllProduct() {
    try {
      const records = await this.modelAction.findAll();

      return {
        messag: SYS_MSG.PRODUCT_LIST_FETCHED,
        data: records,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}
