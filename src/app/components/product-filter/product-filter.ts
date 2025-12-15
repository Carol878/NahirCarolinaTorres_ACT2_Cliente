import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-filter.html'
})
export class ProductFilterComponent {

  constructor(private product: ProductService) {}

  onNombreChange(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.product.filtrarPorNombre(valor);
  }

  onCategoriaChange(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.product.filtrarPorCategoria(valor);
  }

  onActivoChange(event: Event) {
    const marcado = (event.target as HTMLInputElement).checked;
    this.product.filtrarPorActivo(marcado);
  }
}
