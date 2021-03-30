import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreditCardPaymentFacade } from './store/facade';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { State } from './store';
import { Action, DefaultProjectorFn, MemoizedSelector, Store } from '@ngrx/store';
import {
  initialCreditCardState,
  initialState,
  PaymentState,
} from './store/reducer';
import { CreditCardQuery } from './store/selectors';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('AppComponent', () => {
  let actions$: Observable<Action>;

  let store: MockStore<State>;
  let paymentStateSelector: MemoizedSelector<
    State,
    PaymentState,
    DefaultProjectorFn<PaymentState>
  >;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [
        CreditCardPaymentFacade,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    const paymentState = initialState;
    paymentStateSelector = store.overrideSelector(
      CreditCardQuery.getPaymentState,
      paymentState
    );
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FasipeTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FasipeTest');
  });

});
