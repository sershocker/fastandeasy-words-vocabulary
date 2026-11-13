import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordDto } from './words.controller.js';
import { IsOptional } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service.js';

export interface Word {
  id: number;
  original: string;
  definition?: string;
  translation: string;
  cardsetId?: number;
}

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaService) {}

  data: Word[] = [
    {
      id: 1,
      original: 'come',
      definition: 'final point of go',
      translation: 'приходить',
    },
  ];

  findAll(): Word[] {
    return this.data;
  }

  findOne(id: number): Word {
    const answer = this.data.find((word) => (word.id = id));
    if (!answer) {
      throw new NotFoundException(`Word with id=${id} not found`);
    }
    return answer;
  }

  create(obj: CreateWordDto): Word {
    const newId = this.data.length + 1;
    const newWord = {
      id: newId,
      ...obj,
    };
    this.data.push(newWord);
    return newWord;
  }

  update(id: number, obj: CreateWordDto) {
    const index = this.data.findIndex((word) => word.id === id);
    if (index === -1) {
      throw new NotFoundException(`Word with id=${id} not found`);
    }
    this.data[index] = {
      id: id,
      ...obj,
    };
    return {
      message: 'Words data was updated',
      word: this.data[index],
    };
  }

  remove(id: number) {
    const index = this.data.findIndex((word) => word.id === id);
    if (index === -1) {
      throw new NotFoundException(`Word with id=${id} not found`);
    }
    this.data.splice(index, 1);
  }
}
