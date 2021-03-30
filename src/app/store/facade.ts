import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardState } from '../models/credit-card.interface';
import { load, payWithCard, payWithCardSuccess } from './actions'
import { CreditCardQuery } from './selectors';

@Injectable()
export class CreditCardPaymentFacade {
  readonly data$: Observable<CreditCardState>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getCreditCardState));
  }

  getCreditCardData() {
    this.store.dispatch(load());
  }

  makePayment(paymentData: CreditCardState) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(creditCardData) {
    this.store.dispatch(payWithCardSuccess(creditCardData))
  }
}
