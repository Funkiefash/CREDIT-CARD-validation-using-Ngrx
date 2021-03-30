
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moduleFeatureKey } from ".";
import { CreditCardState } from "../models/credit-card.interface";
import { featureKey, PaymentState } from "./reducer";

export const selectCreditCardState = (state): PaymentState => state[moduleFeatureKey][featureKey];
const getPaymentState = createSelector(selectCreditCardState, state => state);
const getCreditCardState = createSelector(selectCreditCardState, state => state.creditCardData);

export const CreditCardQuery = {
  selectCreditCardState,
  getCreditCardState,
  getPaymentState
};
