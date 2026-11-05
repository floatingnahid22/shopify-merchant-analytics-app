import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Product } from './product.interface.js';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAllProducts(@Query('status') status?: Product['status']) {
    return this.productsService.getAllProducts(status);
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }
}
