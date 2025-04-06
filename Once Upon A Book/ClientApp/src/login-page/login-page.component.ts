import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  signUpForm = this.formBuilder.group({
    Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: this.validatePassword,
  }); 
  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    // this.signUpGroup.value.Username.
  }

  validatePassword(control: AbstractControl) {
    return control.get('Password')?.value === control.get('ConfirmPassword')?.value ? null : { passwordMismatch: true };
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value);
    console.log(this.signUpForm.controls.Username.errors)
    console.log(this.signUpForm.controls.Email.errors)
    console.log(this.signUpForm.controls.Password.errors)
    console.log(this.signUpForm.controls.ConfirmPassword.errors)
        // this.signUpForm.value.Password.
  }

  togglePasswordIcon(id: string) {
    let element = document.getElementById(id) as HTMLInputElement;
    let elementIcon = document.getElementById(id + 'Icon') as HTMLLinkElement;
    if (element.type === 'password') {
      element.type = 'text';  
      elementIcon.classList.remove('bi-eye-slash');
      elementIcon.classList.add('bi-eye');
    } else {
      element.type = 'password';  
      elementIcon.classList.remove('bi-eye');
      elementIcon.classList.add('bi-eye-slash');
    }
  }
}
