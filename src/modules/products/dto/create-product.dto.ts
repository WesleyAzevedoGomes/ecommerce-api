import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  name!: string;

  @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  price!: number;

  @IsOptional()
  @IsNumber({}, { message: 'O estoque deve ser um número' })
  stock?: number;
}
