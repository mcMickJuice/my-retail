# myRetail
This project utilizes node Express on the backend and React + Styled Components on the frontend.

## Local Development
Run `yarn start` or `npm start` to start the web server with webpack middleware monitoring file changes.  Upon start, the app will launch in your default browser at http://localhost:3000.

## Production build
Run `yarn build:prod` or `npm run build:prod` to generate a minified production bundle.  Content is served from `./public` with the emitted bundle being saved to `./public/dist`.
