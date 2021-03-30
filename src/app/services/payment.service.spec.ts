/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentService } from './payment.service';
import { CreditCardPaymentFacade } from '../store/facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

describe('Service: Payment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],

      providers: [PaymentService, CreditCardPaymentFacade],
    });
  });

  it('should create service', inject(
    [PaymentService],
    (service: PaymentService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('Should return success on payWithCard', () => {
    const service: PaymentService = TestBed.inject(PaymentService);
    const mockPaymentData = {
      creditCardNumber: '1223232323232342',
      cardHolder: 'Test',
      expirationDate: '2021-01-16T22:52:56.295Z',
      securityCode: '123',
      amount: 2345,
    };
    const mockResponse = {
      status: 'success',
      message: 'Payment processed successfully!',
    };

    service.makePayment(mockPaymentData).pipe(takeUntil(new Subject())).subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    }

    );
  });
});
