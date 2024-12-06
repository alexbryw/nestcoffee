import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'All coffees';
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
