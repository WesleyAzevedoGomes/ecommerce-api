import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'O nome precisa ser um texto' })
  readonly name!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  readonly email!: string;

  @MinLength(6, {
    message: 'A senha deve ter pelo menos $constraint1 caracteres',
  })
  @IsString({
    message: 'O campo $property precisa ser uma string',
  })
  readonly password!: string;
}
