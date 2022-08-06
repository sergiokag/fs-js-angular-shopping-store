# FsJsAngularShoppingStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0,
and makes use of fake store api products resource. 

In order to update all the different component pages
with synchronized data a global service was created (shopping-store-service) with 
mimicks state management tools by using Behavior Subject.

The various components are updated by injecting the previous service which provides 
some useful streams of data. So the components are subscribing to those streams and they 
update accordingly.

## Development server

Run `npm run start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

