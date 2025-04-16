export interface AuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

export interface ProfileConfig {
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

export interface AppConfig {
  auth: AuthConfig;
  profile: ProfileConfig;
} 