import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom, Observable } from 'rxjs';
import { LoginService } from 'src/services/loginService';

@Component({
  selector: 'app-genre-selection-modal',
  templateUrl: './genre-selection-modal.component.html',
  styleUrl: './genre-selection-modal.component.scss'
})
export class GenreSelectionModalComponent {
  constructor(private readonly activeModal: NgbActiveModal, private readonly loginService: LoginService) {}
  searchText: string = '';
  genres: Array<{ id: number, genre: string, isSelected: boolean }> = [];
  selectedGenres:  Array<{ id: number, genre: string, isSelected: boolean }> = [];
  
  async ngOnInit() {
    const genreData = await this.getGenresData();
    this.genres = genreData.map((x) => {
      return { id: x.id, genre: x.genre, isSelected: false };
    });
  }
  
  private async getGenresData() {
    return await firstValueFrom(this.loginService.getGenres());
  }

  closeModal() {
    this.activeModal.close();
  }

  updateSelectedGenres() {
    this.selectedGenres = this.genres.filter((x) => x.isSelected);
  }
}
