import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Param,
  Body,
} from '@nestjs/common';
import { WordsService } from './words.service.js';

export class CreateWordDto {
  original: string;
  definition?: string;
  translation: string;
  cardsetId?: number;
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

  @Post()
  create(@Body() body: CreateWordDto) {
    return this.wordsServise.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateWordDto) {
    return this.wordsServise.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.wordsServise.remove(id);
    return;
  }
}
