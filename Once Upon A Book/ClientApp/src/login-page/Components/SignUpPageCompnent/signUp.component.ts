import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SecurityQuestionsModalComponent } from 'src/login-page/Modals/security-questions-modal/security-questions-modal.component';
import { ISecurityQuestionsModel } from 'src/models/securityQuestionsModel';
import { securityQuestionsMock } from 'src/mockData/securityQuestionsMock';
import { PasswordIconHelper } from 'src/helpers/passwordIconHelper';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/services/loginService';
import { IUserModel } from 'src/models/userModel';

@Component({
  selector: 'signUpPage',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpPageComponent {
  answersSubmitted: ISecurityQuestionsModel = securityQuestionsMock;
  credentials: {email:string, username: string}[] = [{email:'', username:''}];
  private readonly formBuilder = inject(FormBuilder);
  signUpForm = this.formBuilder.group({
    Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: [control => this.validateEmail(control, this.credentials),
                 control => this.validateUsername(control, this.credentials),
                 control => this.validatePassword(control)]
  }); 
  constructor(private readonly modalService: NgbModal, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCredentials();
  }

  validatePassword(control: AbstractControl) {
    return control.get('Password')?.value === control.get('ConfirmPassword')?.value ? null : { passwordMismatch: true };
  }

  validateUsername(control: AbstractControl, credentials: {email:string, username: string}[]) {
    return this.credentials?.map((x) => x.username)?.includes(control.get('Username')?.value!) ? { usernameExists: true } : null;
  }

  validateEmail(control: AbstractControl, credentials: {email:string, username: string}[]) {
    return this.credentials?.map((x) => x.email)?.includes(control.get('Email')?.value!) ? { emailExists: true } : null;
  }

  toggleSecurityQuestionsModal() {
    let modalref = this.modalService.open(SecurityQuestionsModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, centered: true, scrollable: false, windowClass: 'blur-background' });
    modalref.componentInstance.securityQuestionsForm.setValue(this.answersSubmitted);
    modalref.componentInstance.answersSubmitted.subscribe((answersSubmitted: ISecurityQuestionsModel) => {
      this.answersSubmitted = answersSubmitted;
    })
  }

  signUp() {
    console.warn(this.signUpForm.value);
    let newUser: IUserModel = {
      Id: 1,
      Username: this.signUpForm.value.Username!,
      Email: this.signUpForm.value.Email!,
      Password: this.signUpForm.value.Password!,
      EmailConfirmed: false,
      SecurityQuestions: this.answersSubmitted
    }
    console.log("new User", newUser)
    this.loginService.addUser(newUser).subscribe({
      next: (response) => {
        console.log('Response: ', response);
      },
      error: (err) => {
        console.error('Error: ', err);
      },
    })
  }

  getCredentials() {
    this.loginService.getCredentials().subscribe({
      next: (credentials) => {
        console.log("All Credentials", credentials);
        this.credentials = credentials;
      },
      error: (error) => {
        console.log("error", error)
      }
    })
  }  

  togglePasswordIcon(id: string) {
    PasswordIconHelper.togglePasswordIcon(id);
  }
}
