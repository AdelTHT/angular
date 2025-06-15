import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private signedIn = signal(false);

  setSignedIn(value: boolean) {
    this.signedIn.set(value);
  }

  getSignedIn() {
    return this.signedIn.asReadonly();
  }
}
