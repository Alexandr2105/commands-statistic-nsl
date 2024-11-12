import { config } from 'dotenv';
config();

export const settings = {
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'sa',
};
