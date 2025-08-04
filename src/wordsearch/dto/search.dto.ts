import { IsArray } from "class-validator";

export class SearchDto {
    @IsArray()
    words: string[];

    @IsArray()
    matrix: string[][];
}
