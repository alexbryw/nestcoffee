import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    //test url: localhost:3000/coffees/?limit=20&offset=40
    const { limit, offset } = paginationQuery;
    return `All coffees, limit ${limit} offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Coffee id: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `update coffee ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove coffee ${id}`;
  }
}
