require('ts-node/register');

const
  http                = require('http'),
  express             = require('express'),
  path                = require('path'),
  logger              = require('morgan')('combined'),
  port                = process.env.PORT || 4200,
  { requestHandler }  = require('./attractor/rest-api');

// attach the ui to the same express server for simplicity
requestHandler.use('/', express.static(path.join(__dirname, 'dist/attractor')));
requestHandler.use(logger);

http.createServer(requestHandler).listen(port, () => {
  console.log(`Attracting subscribers and advertisers on port ${ port }`)
});
