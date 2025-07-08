type EnvData = {
  baseUrl: string;
  DEFAULT_USER_EMAIL: string;
  DEFAULT_USER_PASSWORD: string;
  INVALID_USER_EMAIL: string,
  INVALID_USER_PASSWORD: string,
};

const ENV = process.env.ENV || 'dev';

const configs: Record<string, EnvData> = {
  dev: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    DEFAULT_USER_EMAIL: 'Admin',
    DEFAULT_USER_PASSWORD: 'admin123',
    INVALID_USER_EMAIL: 'invaliduser',
    INVALID_USER_PASSWORD: 'invalidpassword',
  },
  stage: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    DEFAULT_USER_EMAIL: 'Admin',
    DEFAULT_USER_PASSWORD: 'admin123',
    INVALID_USER_EMAIL: 'invaliduser',
    INVALID_USER_PASSWORD: 'invalidpassword',
  },
  prod: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    DEFAULT_USER_EMAIL: 'Admin',
    DEFAULT_USER_PASSWORD: 'admin123',
    INVALID_USER_EMAIL: 'invaliduser',
    INVALID_USER_PASSWORD: 'invalidpassword',
  },
};

const envData = configs[ENV];

export default { envData };