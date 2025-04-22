import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "genreSortResult",
})
export class GenreSortPipe implements PipeTransform {
    transform(genreObject: Array<{ genre: string, isSelected: boolean }>): Array<{ genre: string, isSelected: boolean }> {
        return genreObject.sort((a,b) =>  (a.genre > b.genre ? 1 : -1));
    }
}
