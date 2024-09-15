import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CityQueryDto } from './dto/query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Dictionary - Cities')
@Controller('dictionary/cities')
export class CityController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.prisma.city.create({
      data: createCityDto,
    });
  }

  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CityQueryDto) {
    return this.prisma.city.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
      include: { country: true },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.city.findUnique({
      where: { id: +id },
      include: { country: true },
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.prisma.city.update({
      where: { id: +id },
      data: updateCityDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prisma.city.delete({
      where: { id: +id },
    });
  }
}
