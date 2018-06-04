import log4js from 'log4js';
import path from 'path';

log4js.configure({
  appenders: {
    prod: { type: 'file', filename: path.join(__dirname, '../log', 'prod.log') },
    dev: { type: 'stdout' },
  },
  categories: { default: { appenders: ['prod', 'dev'], level: 'info' } }
});

global.log = log4js.getLogger(process.env.NODE_ENV === 'production' ? 'prod' : 'dev');
