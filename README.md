# Piano

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Development 

###### Build project
ng build --watch --delete-output-path false

###### Building docker image (development) : 
docker build -t nginx-angular -f nginx.dockerfile .

###### Run docker container from image (:
docker run -p 8080:80 -v ${pwd}/dist/piano:/usr/share/nginx/html nginx-angular

## Deployment to azure

docker build -t pianoacr.azurecr.io/pianowebapp:latest -f nginx.prod.dockerfile .

az login

az acr login --name pianoacr 

docker push pianoacr.azurecr.io/pianowebapp:latest


