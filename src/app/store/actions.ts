
import { createAction, props } from '@ngrx/store';
import { CreditCardState } from '../models/credit-card.interface';

export enum CreditCardPaymentActionType {
  LOAD_CREDIT_CARD = '[CreditCardPayment] Load',
  LOAD_CREDIT_CARD_SUCCESS = '[CreditCardPayment] Load Success',
  REFRESH = '[CreditCardPayment] Refresh',
  PAY_WITH_CARD = '[CreditCardPayment] Pay',
  PAY_WITH_CARD_SUCCESS = '[CreditCardPayment] Payment Success',
  PAY_WITH_CARD_ERROR = '[CreditCardPayment] Submit Success'
}

export const load = createAction(CreditCardPaymentActionType.LOAD_CREDIT_CARD);

export const loadSuccess = createAction(
  CreditCardPaymentActionType.LOAD_CREDIT_CARD_SUCCESS,
  props<{ creditCardData: CreditCardState }>()
);

export const payWithCard = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD,
  props<{ paymentData: CreditCardState }>()
);

export const payWithCardSuccess = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ creditCardData: CreditCardState }>()
);

export const payWithCardError = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ error: string }>()
);


export const refresh = createAction(CreditCardPaymentActionType.REFRESH);

