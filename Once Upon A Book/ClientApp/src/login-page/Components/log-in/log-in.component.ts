import { jsDocComment } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordIconHelper } from 'src/helpers/passwordIconHelper';
import { LoginService } from 'src/services/loginService';

@Component({
  selector: 'logInPage',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  private readonly formbuilder = inject(FormBuilder);
  logInForm = this.formbuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
  });

  constructor(private readonly loginService: LoginService) {}
  
  logIn() {
    // TODO: Use EventEmitter with form value
    console.warn(this.logInForm.value);
    this.loginService.loginuser(this.logInForm.value.Username!, this.logInForm.value.Password!).subscribe({
      next(response: any) {
        console.log("response", response.token)
        localStorage.setItem('Jwt_Token', response.token);
      },
      error(err) {
        console.log(err)
      },
    })
  }

  testJWT() {
    this.loginService.testJWT().subscribe({
      next(value) {
        console.log("Test JWT", value)
      },
      error(err) {
        console.log("err", err)
      },
    })
  }

  togglePasswordIcon(id: string) {
    PasswordIconHelper.togglePasswordIcon(id);
  }
}
