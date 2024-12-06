import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status('200').send('All coffees 200');
    //return 'All coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Coffee id: ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
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
