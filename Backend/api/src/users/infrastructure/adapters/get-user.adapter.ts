import { GetUserPort } from '../../domain/ports/get-user.port';
import { User } from '../../domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';


import { NotFoundException } from '@nestjs/common';

@Injectable()
export class GetUserAdapter implements GetUserPort {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async getUser(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({ 
      where: { id: userId }, 
      relations: ['projects', 'projects.client', 'projects.tasks'] 
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }
}