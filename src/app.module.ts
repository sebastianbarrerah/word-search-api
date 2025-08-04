import { Module } from '@nestjs/common';
import { WordsearchModule } from './wordsearch/wordsearch.module';

@Module({
  imports: [WordsearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
