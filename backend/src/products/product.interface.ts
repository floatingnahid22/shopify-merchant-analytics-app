export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  sku: string;
  inventory: string;
  status: 'in stock' | 'out of stock';
}
