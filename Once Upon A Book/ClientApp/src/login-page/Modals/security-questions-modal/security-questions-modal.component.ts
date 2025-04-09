import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-security-questions-modal',
  templateUrl: './security-questions-modal.component.html',
  styleUrl: './security-questions-modal.component.scss'
})
export class SecurityQuestionsModalComponent {
  private readonly formBuilder = inject(FormBuilder);
  securityQuestionsForm = this.formBuilder.group({
    firstPet: ['', Validators.required],
    favoriteStreet: ['', Validators.required],
    favoriteGame: ['', Validators.required]
  });
  constructor(private readonly activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }

}
