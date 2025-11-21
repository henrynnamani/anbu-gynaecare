import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateProductDto } from '../dto/create-product.dto';

export const createProductDoc = () =>
  applyDecorators(
    ApiOperation({ summary: 'Create Product' }),
    ApiBearerAuth(),
    ApiBody({
      type: CreateProductDto,
    }),
    ApiResponse({
      status: 200,
      example: 'Product successfully created',
    }),
    ApiResponse({
      status: 400,
      example: 'Bad Request',
    }),
    ApiResponse({
      status: 500,
      example: 'Internal Server Error',
    }),
  );
