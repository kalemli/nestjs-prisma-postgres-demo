import { ApiPropertyOptional, ApiQuery } from '@nestjs/swagger';
import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  skip?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  take?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
