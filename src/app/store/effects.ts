import { get } from 'lodash';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  mergeMap,
  filter,
  withLatestFrom,
} from 'rxjs/operators';
import { routerNavigatedAction } from '@ngrx/router-store';

// import { CreditCardPaymentAdapter } from 'src/app/core/adapter';
import { PaymentService } from '../services/payment.service';
import {
  load,
  loadSuccess,
  payWithCard,
  payWithCardError,
  payWithCardSuccess,
} from './actions';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Injectable()
export class CreditCardPaymentStoreEffects {
  constructor(
    private dataService: PaymentService,
    private toasterService: ToasterService,
    private router: Router,
    private actions$: Actions
  ) {}

  proceedPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(payWithCard),
      concatMap((action) => {
        return of(action).pipe(withLatestFrom());
      }),
      mergeMap(([action]) => {
        const { paymentData } = action;
        let returnedAction;
        return this.dataService.makePayment(paymentData).pipe(
          map((response) => {
            if (response.body.status === 'success') {
              this.toasterService.pop(
                'success',
                'SUCCESSFUL',
                'Your payment was successful'
              );
              this.router.navigate([''])
              returnedAction = payWithCardSuccess({creditCardData: paymentData});
            } else {
              this.toasterService.pop(
                'error',
                'FAILURE',
                'Your payment Failed please try again later'
              );
              returnedAction = payWithCardError({
                error: 'Something went wrong please try again',
              });
            }
            return returnedAction;
          }),
          catchError((error) => of(payWithCardError({ error })))
        );
      })
    )
  );
}
