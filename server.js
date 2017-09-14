require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const fs = require('fs');

const { platformServer, renderModuleFactory } = require('@angular/platform-server');
const { ngExpressEngine } = require('@nguniversal/express-engine');


// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const { AppServerModuleNgFactory } = require(`./dist-server/main.bundle`);

const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

// Set the engine
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
}));

app.set('view engine', 'html');

app.set('views', './');
app.use('/', express.static('./', {index: false}));

app.get('*', (req, res) => {
  res.render('index', {
  req,
  res
});
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
