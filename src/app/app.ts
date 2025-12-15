import { Component, signal } from '@angular/core';
import { ProductService, Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductForm } from './components/product-form/product-form';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports:[CommonModule,ProductForm,ProductFilterComponent,ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly tittle = signal('gestion-producto');

  productos: Product[] = [];
    onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }

  constructor(private productService: ProductService) { 
    //this.productService.cargarProductos().subscribe(
      //datos => {
        //console.log('Productos cargados desde la API:', datos);
      //}
    //);
  }
}
