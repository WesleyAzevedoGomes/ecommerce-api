import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { User } from '../../modules/users/entities/user.entity';
import { Product } from '../../modules/products/entities/product.entity';

// Carrega as variáveis do .env
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Product],
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
