import { Module } from '@nestjs/common';
import { WordsearchService } from './wordsearch.service';
import { WordsearchController } from './wordsearch.controller';

@Module({
  controllers: [WordsearchController],
  providers: [WordsearchService],
})
export class WordsearchModule { }
