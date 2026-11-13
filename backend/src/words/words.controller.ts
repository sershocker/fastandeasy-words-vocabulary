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
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
  original: string;

  @IsString()
  @IsOptional()
  definition?: string;

  @IsString()
  @IsNotEmpty()
  translation: string;

  @IsInt()
  @IsOptional()
  cardsetId?: number;
}

export class UpdateWordDto extends PartialType(CreateWordDto) {}

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  findAll() {
    return this.wordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.wordsService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateWordDto) {
    return this.wordsService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateWordDto) {
    return this.wordsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.wordsService.remove(id);
  }
}
