import { Component, EventEmitter, Output } from '@angular/core';

export interface OrderDetails {
  fullName: string;
  address: string;
  creditCardNumber: string;
}

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent {
  @Output() public submitEventEmitter: EventEmitter<OrderDetails> = new EventEmitter();

  public order: OrderDetails = {
    fullName: '',
    address: '',
    creditCardNumber: '',
  };

  public constructor() {}

  public onSubmit(): void {
    this.submitEventEmitter.emit(this.order);
  }
}
