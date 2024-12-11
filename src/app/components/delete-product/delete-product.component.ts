import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  @Input() productId!: number
  @Output() onDeleteEvent = new EventEmitter()

  onDelete() {
    this.onDeleteEvent.emit(this.productId)
  }
}
// <td>
// <app-delete-product
//   [productId]="product.productId"
//   (onDeleteEvent)="onDelete($event)"
// ></app-delete-product>
// </td>