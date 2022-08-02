import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent {
  @Output() public submitEventEmitter: EventEmitter<boolean> =
    new EventEmitter();

  public order: {
    fullName: string;
    address: string;
    creditCardNumber: string;
  } = {
    fullName: '',
    address: '',
    creditCardNumber: '',
  };

  public constructor() {}

  public onSubmit(): void {
    this.submitEventEmitter.emit(true);
  }
}
