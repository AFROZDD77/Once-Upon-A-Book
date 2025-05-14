import { jsDocComment } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordIconHelper } from 'src/helpers/helpers/passwordIconHelper';
import { GenreSelectionModalComponent } from 'src/login-page/Modals/genre-selection-modal/genre-selection-modal.component';
import { GlobalStateManagementService } from 'src/services/globalStateManagementService';
import { LoginService } from 'src/services/loginService';
import { OpenLibraryService } from 'src/services/openLibraryService';

@Component({
  selector: 'logInPage',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  private readonly formbuilder = inject(FormBuilder);
  genre: string = "";
  logInForm = this.formbuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
  });

  constructor(private readonly loginService: LoginService, private readonly openLibraryService: OpenLibraryService,  private readonly globalStateManagementService: GlobalStateManagementService, private readonly modalService: NgbModal) {}
  
  logIn() {


    this.openLibraryService.gethorrorBooks().subscribe({
      next: (books) => {
        console.log("horror books", books)
      },
      error: (err) => {
        console.log("err", err)
      }
    })

    // TODO: Use EventEmitter with form value
    this.globalStateManagementService.setSpinner(true);
    this.modalService.open(GenreSelectionModalComponent, {  size: 'lg', backdrop: 'static', keyboard: false, centered: true, scrollable: true, windowClass: 'blur-background custom-modal-width' })
    console.warn(this.logInForm.value);
    this.loginService.loginuser(this.logInForm.value.Username!, this.logInForm.value.Password!).subscribe({
      next: (response: any) => {
        console.log("response", response.token)
        localStorage.setItem('Jwt_Token', response.token)
        // this.globalStateManagementService.setSpinner(false);
      },
      error: (err) => {
        console.log(err)
        // this.globalStateManagementService.setSpinner(false);
      },
    })
  }

  insertGenre() {
    this.loginService.insertGenre(this.genre).subscribe({
      next: (value) => {
        console.log("insertGenred", this.genre)
        console.log("is success?", value)
      },
      error: (err) => {
        console.log("err", err)
      },
    })
  }

  togglePasswordIcon(id: string) {
    PasswordIconHelper.togglePasswordIcon(id);
  }
}
