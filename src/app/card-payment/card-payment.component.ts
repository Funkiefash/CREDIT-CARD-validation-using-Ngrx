import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Subject } from 'rxjs';
import { CreditCardPaymentFacade } from '../store/facade';
import { currentDate } from '../store/reducer';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();

  paymentForm: FormGroup;
  errorMessage: string;
  currentDate = new Date();
  currentMonth = currentDate.getMonth() + 1;
  currentYear = currentDate.getFullYear();

  constructor(private formBuilder: FormBuilder, private facade: CreditCardPaymentFacade) { }

  ngOnInit() {
    this.errorMessage = "Please Fill all fields";
    this.buildForm();
  }


  buildForm() {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(this.currentMonth),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(this.currentYear),Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]
    });
  }

 // convenience getter for easy access to form fields
 get formControls() { return this.paymentForm.controls; }

 onSubmit() {
   this.submitForm();
  }

  submitForm() {
  if (this.paymentForm.status === 'VALID') {
    const expiryDate = new Date(this.paymentForm.get('expirationYear').value, this.paymentForm.get('expirationMonth').value, 1)
    const paymentFormData = {
      creditCardNumber: this.paymentForm.get('cardNumber').value.toString(),
      cardHolder: this.paymentForm.get('nameonCard').value,
      expirationDate: expiryDate,
      securityCode: this.paymentForm.get('cardCVVNumber').value,
      amount: +this.paymentForm.get('amount').value,
    };

    this.facade.makePayment(paymentFormData);
   
  } else {
    this.errorMessage = "the Form is Invalid!";
  }
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
