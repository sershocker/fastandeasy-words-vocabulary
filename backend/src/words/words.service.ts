import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from './words.controller.js';
import { IsOptional } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma, Word } from '../generated/prisma/client.js';

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    //return this.data;
    return await this.prisma.word.findMany();
  }

  async findOne(id: number) {
    const answer = await this.prisma.word.findUnique({ where: { id: id } });
    if (!answer) {
      throw new NotFoundException(`Word with id=${id} not found`);
    }
    return answer;
  }

  async create(obj: CreateWordDto) {
    return this.prisma.word.create({
      data: { ...obj, rating: 0 },
    });
  }

  async update(id: number, obj: UpdateWordDto) {
    const index = this.findOne(id);
    if (!index) {
      throw new NotFoundException(`Word with id=${id} not found`);
    }
    const answer = await this.prisma.word.update({
      where: { id: id },
      data: obj,
    });

    return {
      message: 'Words data was updated',
      word: answer,
    };
  }

  async remove(id: number) {
    if (await this.findOne(id))
      throw new NotFoundException(`Word with id=${id} not found`);
    await this.prisma.word.delete({ where: { id: id } });
  }
}
