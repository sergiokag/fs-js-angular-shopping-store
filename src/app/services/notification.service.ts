import { Injectable } from '@angular/core';

import AWN from 'awesome-notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public readonly notifier: AWN;
  public constructor() {
    this.notifier = new AWN();
  }
}
