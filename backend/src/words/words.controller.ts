import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { WordsService } from './words.service.js';

export class CreateWordDto {
  origin: string;
  definition: string;
  translation: string;
}

@Controller('words')
export class WordsController {
  constructor(private readonly wordsServise: WordsService) {}

  @Get()
  findAll() {
    return this.wordsServise.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.wordsServise.findOne(id);
  }
}
