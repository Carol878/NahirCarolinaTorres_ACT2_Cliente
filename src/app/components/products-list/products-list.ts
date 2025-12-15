import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCardComponent} from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];

    constructor(private productService: ProductService) {
    this.productService.productos$.subscribe(productos => {
    this.productos = productos;
      console.log('Productos recibidos:', productos);
    });
  }
}