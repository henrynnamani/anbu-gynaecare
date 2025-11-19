import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT)!,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: Boolean(process.env.DB_SYNC) === true,
  extra: {
    max: 20,
    idleTimeoutMillis: 30000,
  },
});
