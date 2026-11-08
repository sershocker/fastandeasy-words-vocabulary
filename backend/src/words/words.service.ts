import { Injectable, NotFoundException } from '@nestjs/common';

export interface Word {
  id: number;
  origin: string;
  definition?: string;
  translation: string;
}

@Injectable()
export class WordsService {
  data: Word[] = [
    {
      id: 1,
      origin: 'come',
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

  create(obj: Word) {}
}
