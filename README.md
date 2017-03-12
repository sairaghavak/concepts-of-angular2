# ConceptsOfAngular2

This project will try to illustrate the concepts of angular2. And the project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Prerequisites

1. Download [node.js](https://nodejs.org) and install it. Verify the installation with the below two commands.
  - `node -v`
  - `npm -v`
2. Install [Angular CLI](https://github.com/angular/angular-cli) using the following command `npm install -g @angular/cli`. Verify the installation by issuing the commands.
  - `ng help` and 
  - `ng -v`

## Installation
### Dev Setup
1. Clone or download this project.
2. `npm install`
3. `ng server` or `ng serve`
4. This will start the application at `4200` port on your `localhost`. *Url:* `http://localhost:4200` 


### Unit Testing
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/1.0/index.html).

### Integration Testing
Start your server and run `ng e2e` to execute the end-to-end tests via [Protractor](https://www.protractortest.org).

### Prod Setup
1. Build the project to create the artifact using `ng build --prod`, this would create the final project files in `dist/` folder.
![created-prod-dist](https://cloud.githubusercontent.com/assets/16429828/23830651/d73a11bc-0735-11e7-9af3-3ced6edfd086.PNG)
2. The files in `dist` folder is ready for deployment.

To know more about [Angular CLI](https://github.com/angular/angular-cli), refer to [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).