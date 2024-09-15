import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  city: string;

  @ApiProperty()
  countryId: number;
}
