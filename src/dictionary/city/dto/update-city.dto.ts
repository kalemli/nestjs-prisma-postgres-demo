import { PartialType } from '@nestjs/mapped-types';
import { CreateCityDto } from './create-city.dto';
import { City } from '@prisma/client';

export class UpdateCityDto extends PartialType(CreateCityDto) {
  city: City['city'];
}
