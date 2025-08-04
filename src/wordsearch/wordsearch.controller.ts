import { Controller } from '@nestjs/common';
import { WordsearchService } from './wordsearch.service';

@Controller('wordsearch')
export class WordsearchController {
  constructor(private readonly wordsearchService: WordsearchService) { }
}
