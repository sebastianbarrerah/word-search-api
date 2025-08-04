import { Injectable } from '@nestjs/common';
import { DIRECTIONS_API } from './constants/directions';

@Injectable()
export class WordsearchService {

  private found: string[] = [];
  private notFound: string[] = [];

  findWords(word: string[], matrix: string[][]) {

    for (const words of word) {
      const isFound = this.searchWordInMatrix(matrix, words);

      if (isFound) {
        this.found.push(words);
      } else {
        this.notFound.push(words)
      }
    }

    return {
      encontrado: this.found, noEncontrado: this.notFound
    };
  }

  searchWordInMatrix(matrix: string[][], word: string): boolean {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (matrix[row][col] === word[0]) {
          for (const [dx, dy] of DIRECTIONS_API) {
            if (this.searchInDirection(matrix, word, row, col, dx, dy)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  searchInDirection(matrix: string[][], word: string, x: number, y: number, dx: number, dy: number): boolean {
    for (let i = 0; i < word.length; i++) {
      const nx = x + i * dx;
      const ny = y + i * dy;
      if (
        nx < 0 || ny < 0 ||
        nx >= matrix.length || ny >= matrix[0].length ||
        matrix[nx][ny] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  }
}
