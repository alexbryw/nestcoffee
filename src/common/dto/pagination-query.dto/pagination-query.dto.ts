import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //@Type(() => Number) //Not needed when pipline has 'enableImplicitConversion'
  limit: number;

  @IsOptional()
  @IsPositive()
  //@Type(() => Number)
  offset: number;
}
