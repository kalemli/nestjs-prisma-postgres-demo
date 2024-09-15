import { IsIn, IsOptional } from 'class-validator';
import { Prisma } from '@prisma/client';
import { BaseQueryDto } from 'src/common/dtos/common.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CityQueryDto extends BaseQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(Object.values(Prisma.CityScalarFieldEnum))
  sortBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(Object.values(Prisma.CityScalarFieldEnum))
  searchBy?: string;
}
