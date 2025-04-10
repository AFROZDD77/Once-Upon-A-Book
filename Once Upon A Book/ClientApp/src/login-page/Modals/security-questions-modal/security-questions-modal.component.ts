import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/services/loginService';

@Component({
  selector: 'app-security-questions-modal',
  templateUrl: './security-questions-modal.component.html',
  styleUrl: './security-questions-modal.component.scss'
})
export class SecurityQuestionsModalComponent {
  @Output() answersSubmitted = new EventEmitter<any>();
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

  onSubmit() {
    this.answersSubmitted.emit(this.securityQuestionsForm.value);
    this.activeModal.close();
  }
}
