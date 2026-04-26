import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserResponseDTO } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  private mapToResponse(user: User): UserResponseDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
  async findAll(): Promise<UserResponseDTO[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.mapToResponse(user));
  }
  async create(createUserDTO: CreateUserDTO): Promise<UserResponseDTO> {
    const existingUser = await this.findOneByEmail(createUserDTO.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    const user = this.userRepository.create(createUserDTO);
    try {
      await this.userRepository.save(user);
      return this.mapToResponse(user);
    } catch (err) {
      throw new InternalServerErrorException('Failed to create user', {
        cause: err,
      });
    }
  }
  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }
  async findOneById(id: number): Promise<UserResponseDTO> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario com ${id} não encontrado`);
    }
    return this.mapToResponse(user);
  }
}
