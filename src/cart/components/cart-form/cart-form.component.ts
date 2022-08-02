import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent {
  @Output() submitEventEmitter: EventEmitter<any> = new EventEmitter();
  public constructor() {}
}
