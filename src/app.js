import express from 'express';
import path from 'path';
import fs from 'fs';
import logger, { token } from 'morgan';
import rfs from 'rotating-file-stream';
// import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes';

const app = express();

token('time', () => {
  return new Date().toLocaleString();
});
const logDirectory = path.join(__dirname, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory,
});
process.env.NODE_ENV === 'production' ? app.use(logger('###### [:time] :method :url :status - :response-time ms ######', {
  stream: accessLogStream,
})) : app.use(logger('###### [:time] :method :url :status - :response-time ms ######'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors());

app.use('/api', router);

export default app;
