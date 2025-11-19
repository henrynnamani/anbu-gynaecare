import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  port: +process.env.DB_PORT!,
  entities: [__dirname + '../**/*.entity.ts'],
  migrations: [],
  synchronize: process.env.DB_SYNC === 'true',
});
