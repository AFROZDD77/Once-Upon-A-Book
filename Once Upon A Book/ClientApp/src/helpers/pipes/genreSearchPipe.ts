// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'genreSearchResult',
})
export class GenreSearchPipe implements PipeTransform {
  transform(genreObject: Array<{ genre: string, isSelected: boolean }>, searchText: string): Array<{ genre: string, isSelected: boolean }> {
    if (searchText?.length > 0 ) {
      return genreObject.filter((x) => x.genre.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      return genreObject;
    }
  }
}