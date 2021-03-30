# FasipeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Go to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build Project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Details of the test

Write an angular application with the following requirements:
1. Create DTO for modeling Credit Card Payment details like below, which will be used to make
requests
  a. Credit Card Number (mandatory, string)
  b. Card Holder (mandatory, string)
  c. Expiration Date (mandatory, Date, >CurrentDate)
  d. Security Code - CCV (optional, string, 3 digits)
  e. Amount (mandatory, number, > 0)
2. Using NgRx, create a state management solution that will hold our card.
3. Write a Payment service with a function that creates a POST request.
4. Create a new page and a new component (to be used in this page), with inputs for the DTO,
created at point 1, use reactive forms and add validations on these inputs. Create a button with
a click event and call the payment service method and based on the http response, show a toast
notification informing the user.
5. In the app.component.html, create a button (name it any way you like) and use the Angular
router to navigate to the new page created at the previous point.
6. To make sure that our state management solution is working, get the data from the store and
display it on the app.component.html.
Obligations:
- Use the angular/typescript style guide to separate the models/dto and the services.
- Use RxJS when making requests and demonstrate some operators.
- Make sure to avoid any memory leaks.
- Make sure you have a good file hierarchy and follow best practices to improve naming conventions
Recommendations:
- Follow clean code best practices, follow industry standards ( https://angular.io/guide/styleguide )
- Use CSS or SCSS to style your component(s). Although functionality is more important, you can also
make it look pretty.

