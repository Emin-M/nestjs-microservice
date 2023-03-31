import { createLogger, format, transports } from 'winston';

const customFormat = format.combine(
  format.timestamp(),
  format.printf((info) => {
    return `${info.timestamp} - [${info.level.toLocaleUpperCase()}] - ${
      info.message
    }`;
  }),
);

export const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      filename: 'logs/billing.log',
    }),
  ],
});
