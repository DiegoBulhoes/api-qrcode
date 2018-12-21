import express from 'express';
import dotenv from 'dotenv';
import log4js from 'log4js';
import bodyParser from 'body-parser';
import compression from 'compression';
import csv from './routes/csv';

const app = express();
const logger = log4js.getLogger();
log4js.configure('./config/log4js.json');

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: './config/.env.dev',
  });
} else {
  dotenv.config({
    path: './config/.env.local',
  });
}

app.set('port', process.env.PORT_SERVE || 3014);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(log4js.connectLogger(logger, { level: 'info' }));

/* istanbul ignore next line */
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
  next();
});

csv(app, logger);

export default app;
