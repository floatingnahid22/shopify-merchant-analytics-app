import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface.js';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      sku: 'SKU001',
      inventory: '50 units',
      status: 'in stock'
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      sku: 'SKU002',
      inventory: '0 units',
      status: 'out of stock'
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description for Product 3',
      price: 39.99,
      sku: 'SKU003',
      inventory: '20 units',
      status: 'in stock'
    }
  ];

  getAllProducts(status?: Product['status']) {
    let products = this.products;

    if (status) {
      return products.filter(product => product.status === status);
    }

    return products;
  }

  getProductById(id: number) {
    const ticket = this.products.find(product => product.id === id);

    if(!ticket) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return ticket;
  }
}
