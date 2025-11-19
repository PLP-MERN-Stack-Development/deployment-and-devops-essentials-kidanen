// backend/src/server.js
require('dotenv').config();
const http = require('http');
const createApp = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const SENTRY_DSN = process.env.SENTRY_DSN || '';

const app = createApp({ sentryDsn: SENTRY_DSN });

let server;

async function start() {
  try {
    if (MONGO_URI) {
      console.log('Connecting to DB...');
      await connectDB(MONGO_URI);
      console.log('DB connected');
    } else {
      console.warn('MONGO_URI not set — skipping DB connect (useful for quick local tests)');
    }

    server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

async function shutdown() {
  console.log('Shutting down server...');
  if (server) {
    server.close(() => {
      console.log('HTTP server closed');
      // Close DB connection if needed
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

start();
