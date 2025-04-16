import { AppConfig } from '@shared';

export default (): AppConfig => ({
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
    database: {
      host: process.env.AUTH_DB_HOST,
      port: parseInt(process.env.AUTH_DB_PORT, 10) || 5432,
      username: process.env.AUTH_DB_USERNAME,
      password: process.env.AUTH_DB_PASSWORD,
      database: process.env.AUTH_DB_DATABASE,
    },
  },
  profile: {
    database: {
      host: process.env.PROFILE_DB_HOST,
      port: parseInt(process.env.PROFILE_DB_PORT, 10) || 27017,
      username: process.env.PROFILE_DB_USERNAME,
      password: process.env.PROFILE_DB_PASSWORD,
      database: process.env.PROFILE_DB_DATABASE,
    },
  },
}); 