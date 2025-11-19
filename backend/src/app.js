// backend/src/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Sentry = require('@sentry/node');

const healthRouter = require('./health');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

function createApp({ sentryDsn } = {}) {
  const app = express();

  if (sentryDsn) {
    Sentry.init({ dsn: sentryDsn, environment: process.env.NODE_ENV });
    app.use(Sentry.Handlers.requestHandler());
  }

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.use('/health', healthRouter);
  app.use('/api', routes);

  if (sentryDsn) app.use(Sentry.Handlers.errorHandler());

  app.use(errorHandler);

  return app;
}

module.exports = createApp;
