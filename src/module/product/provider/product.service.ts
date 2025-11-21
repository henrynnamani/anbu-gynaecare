import { ModelAction } from '@/shared/action.model';
import { Injectable } from '@nestjs/common';
import { Product } from '../model/product.entity';

@Injectable()
export class ProductService {
    private modelAction: ModelAction<Product>

    constructor() {}
}
