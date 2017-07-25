# myRetail
This project utilizes node Express on the backend and React + Styled Components on the frontend.

## Local Development
Run `yarn start` or `npm start` to start the web server with webpack middleware monitoring file changes.  Upon start, the app will launch in your default browser at http://localhost:3000.

## Production build
Run `yarn build:prod` or `npm run build:prod` to generate a minified production bundle.  Content is served from `./public` with the emitted bundle being saved to `./public/dist`.

## Run with Docker
This app is also deployed via a docker image `mikejoyce19/my-retail`.  To run the app using docker, run the command `docker run --name <APP-NAME> -p <LOCAL-PORT>:4000 -d mikejoyce19/my-retail` where `APP-NAME` is what you want your container to be called and `LOCAL-PORT` is the local port you'd like the container to bind to.