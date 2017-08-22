import app from './src/app';
import { port, db } from './src/config';
import mongoose from 'mongoose';

const runtime = process.env.NODE_ENV;
const isDevelopment = runtime === undefined || runtime === 'development';

mongoose.connect(db.url, db.options);

mongoose.connection.on('connected', () => {
  mongoose.set('debug', isDevelopment);
  console.log('Database connected');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
  console.info('Exit process');

  process.exit(1);
});

mongoose.connection.on('disconnected', () => {
  console.error('Database disconnected');
  console.info('Exit process');

  process.exit(1);
});

app.listen(port);

console.info(`app listen on port ${port}`);
