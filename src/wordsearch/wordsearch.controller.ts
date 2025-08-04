import { Body, Controller, Post } from '@nestjs/common';
import { WordsearchService } from './wordsearch.service';
import { SearchDto } from './dto/search.dto';

@Controller('wordsearch')
export class WordsearchController {
  constructor(private readonly wordsearchService: WordsearchService) { }

  @Post("search")
  searchWords(@Body() data: SearchDto) {
    return this.wordsearchService.findWords(data.words, data.matrix)
  }
}
