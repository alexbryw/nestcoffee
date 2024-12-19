import { DataSource } from 'typeorm';
import { CoffeeRefactor1734637944782 } from 'src/migrations/1734637944782-CoffeeRefactor';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1734637944782],
});
