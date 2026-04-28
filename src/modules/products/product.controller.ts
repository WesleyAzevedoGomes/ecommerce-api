import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDTO) {
    return this.productService.create(createProductDto);
  }
}
