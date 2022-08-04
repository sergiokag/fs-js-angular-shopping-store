import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ShoppingStoreService } from 'src/app/services/shopping-store.service';

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
  @Output() public submitEventEmitter: EventEmitter<OrderDetails> =
    new EventEmitter();

  public order: OrderDetails = {
    fullName: '',
    address: '',
    creditCardNumber: '',
  };

  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService
  ) {}

  public onSubmit(): void {
    this.submitEventEmitter.emit(this.order);
  }
}
