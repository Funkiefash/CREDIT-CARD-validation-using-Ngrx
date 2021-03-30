
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import * as storeModuleConfiguration from '.';
import { CreditCardPaymentStoreEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CreditCardPaymentStoreModule { }
