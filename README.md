# Angular Boilerplate for enterprise application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng add @kainisoft/tools feature-name` to generate a new feature.

## Project structure

```bash
├── src
│   ├── app
│   │   ├── core - core files (config, guard, decorators e.t.c)
│   │   ├── feature - feature directory 
│   │   |   ├── base - base feature (user, navigation, sse and e.t.c) 
│   │   ├── layout - by default two layout exists (vertival and blank)
│   │   ├── shared - shared module
│   │   |   ├── components
│   │   |   ├── form
│   │   |   ├── . . . and other shared modules
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.-routing.module.ts
│   ├── assets
│   ├── environment
│   ├── style
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
