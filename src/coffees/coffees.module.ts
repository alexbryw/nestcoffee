import { Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['zoėgas', 'nescafe']);
        console.log('Async factory');
        return coffeeBrands;
      },
      scope: Scope.TRANSIENT,
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
