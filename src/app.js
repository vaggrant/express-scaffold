const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

logger.token('time', () => {
  return new Date().toLocaleString();
});
app.use(logger('###### [:time] :method :url :status - :response-time ms ######'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);

module.exports = app;
