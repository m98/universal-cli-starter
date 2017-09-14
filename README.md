# universal-cli-starter
A simple starter for Angular Universal using Angular CLI

## clone the repository
`git clone https://github.com/m98/universal-cli-starter.git`

## Install dependencies
In the cloned directory, run:
`npm install`

## Build and serve:
- `ng serve`: Angular CLI serve command
- `ng build --prod`: Angular CLI production build command
- `npm run build:universal`: Build the client and server application. For running the server, open the `dist` directory (`cd dist`) and run the `server.js` by using `node server.js`, it will serve the application on `localhost:8000`
- `npm run serve:universal`: first build the client and server application, then runs it.

To learn how to add server-side rendering support to your application, [read this tutorial](https://medium.com/@kermani/angular-server-side-rendering-using-angular-cli-bbde0c0eefe9) on Medium

