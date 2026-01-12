import { app } from './app';
import { env } from './env';
import { logger } from './infra/logger';

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT} in ${env.NODE_ENV} mode`);
});

const gracefulShutdown = (signal: string) => {
  return () => {
    logger.info(`${signal} received. Shutting down gracefully...`);
    server.close(() => {
      logger.info('Closed out remaining connections.');
      process.exit(0);
    });
  };
};

process.on('SIGTERM', gracefulShutdown('SIGTERM'));
process.on('SIGINT', gracefulShutdown('SIGINT'));
