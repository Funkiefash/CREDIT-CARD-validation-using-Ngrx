import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  makePayment(paymentData): Observable<any> {
    const response = {
      status: 'success',
      message: 'Payment processed successfully!',
    };
    return of(new HttpResponse({ status: 200, body: response }));
  }
}
