import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rate-books-modal',
  templateUrl: './rate-books-modal.component.html',
  styleUrl: './rate-books-modal.component.scss'
})
export class RateBooksModalComponent {
  constructor(private readonly activemodal: NgbActiveModal) {}

  closeModal() {
    this.activemodal.close();
  }
}
