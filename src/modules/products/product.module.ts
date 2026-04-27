import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
