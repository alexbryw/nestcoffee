import {
  //HttpException,
  //HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}
  //private coffees: Coffee[] = [
  //  {
  //    id: 1,
  //    name: 'Skånerost',
  //    brand: 'Zoégas',
  //    flavors: ['vanilla', 'strawberry'],
  //  },
  //];

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.coffeeModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
    if (!coffee) {
      throw new NotFoundException(`Missing coffe #${id}`);
      //throw new HttpException(`Missing coffe #${id} `, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(createCoffeeDto);
    return coffee.save();
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const foundCoffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
      .exec();

    if (!foundCoffee) {
      throw new NotFoundException(`Missing coffee #${id}`);
    }
    return foundCoffee;
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    return coffee.deleteOne();
  }
}
