import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductResponseDTO } from './dto/product-response.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  private mapToResponse(product: Product): ProductResponseDTO {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
    };
  }

  async create(
    createProductDto: CreateProductDTO,
  ): Promise<ProductResponseDTO> {
    const product = this.productRepository.create(createProductDto);
    try {
      await this.productRepository.save(product);
      return this.mapToResponse(product);
    } catch (err) {
      throw new InternalServerErrorException('Failed to create user', {
        cause: err,
      });
    }
  }
  async findAll(): Promise<ProductResponseDTO[]> {
    const products = this.productRepository.find();
    return (await products).map((product) => this.mapToResponse(product));
  }
}
