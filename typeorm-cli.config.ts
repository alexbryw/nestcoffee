import { DataSource } from 'typeorm';
//import { CoffeeRefactor1734637944782 } from 'src/migrations/1734637944782-CoffeeRefactor';
import { Coffee } from 'src/coffees/entities/coffees.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity/flavor.entity';
import { SchemaSync1734640332223 } from 'src/migrations/1734640332223-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [SchemaSync1734640332223],
  //migrations: [CoffeeRefactor1734637944782, SchemaSync1734640332223],
});
