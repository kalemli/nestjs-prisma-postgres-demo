import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma/prisma.module';
import { CityModule } from './dictionary/city/city.module';

@Module({
  imports: [CityModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
