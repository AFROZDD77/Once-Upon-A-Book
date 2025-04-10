import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SecurityQuestionsModalComponent } from 'src/login-page/Modals/security-questions-modal/security-questions-modal.component';
import { ISecurityQuestionsModal } from 'src/modals/securityQuestions';
import { securityQuestionsMock } from 'src/mockData/securityQuestionsMock';
import { PasswordIconHelper } from 'src/helpers/passwordIconHelper';

@Component({
  selector: 'signUpPage',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpPageComponent {
  showSignUp: boolean = true;
  answersSubmitted: ISecurityQuestionsModal = securityQuestionsMock;
  private readonly formBuilder = inject(FormBuilder);
  signUpForm = this.formBuilder.group({
    Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: this.validatePassword
  }); 
  constructor(private readonly modalService: NgbModal) { }

  validatePassword(control: AbstractControl) {
    return control.get('Password')?.value === control.get('ConfirmPassword')?.value ? null : { passwordMismatch: true };
  }

  togglePage() {
    this.showSignUp = !this.showSignUp;
  }

  toggleSecurityQuestionsModal() {
    let modalref = this.modalService.open(SecurityQuestionsModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, centered: true, scrollable: false, windowClass: 'blur-background' });
    modalref.componentInstance.securityQuestionsForm.setValue(this.answersSubmitted);
    modalref.componentInstance.answersSubmitted.subscribe((answersSubmitted: ISecurityQuestionsModal) => {
      this.answersSubmitted = answersSubmitted;
    })
  }

  signUp() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value);
  }

  togglePasswordIcon(id: string) {
    PasswordIconHelper.togglePasswordIcon(id);
  }
}
