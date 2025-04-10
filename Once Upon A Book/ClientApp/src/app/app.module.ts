import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageComponent } from 'src/login-page/Components/loginPageCompnent/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityQuestionsModalComponent } from 'src/login-page/Modals/security-questions-modal/security-questions-modal.component';
import { ThemeService } from 'src/services/themeservice';
import { LoginService } from 'src/services/loginService';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    SecurityQuestionsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ThemeService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
