import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordIconHelper } from 'src/helpers/passwordIconHelper';

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
  
  logIn() {
    // TODO: Use EventEmitter with form value
    console.warn(this.logInForm.value);
  }

  togglePasswordIcon(id: string) {
    PasswordIconHelper.togglePasswordIcon(id);
  }
}
