import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  name!: string;

  @Min(1, { message: 'Valor precisa ser maior ou igual a 1' })
  @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  price!: number;

  @IsOptional()
  @IsNumber({}, { message: 'O estoque deve ser um número' })
  stock?: number;
}
