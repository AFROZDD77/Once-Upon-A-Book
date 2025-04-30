import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpPageComponent } from 'src/login-page/Components/SignUpPageCompnent/signUp.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityQuestionsModalComponent } from 'src/login-page/Modals/security-questions-modal/security-questions-modal.component';
import { ThemeService } from 'src/services/themeservice';
import { LoginService } from 'src/services/loginService';
import { LogInComponent } from 'src/login-page/Components/log-in/log-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/JwtInterceptor';
import { GlobalStateManagementService } from 'src/services/globalStateManagementService';
import { GenreSelectionModalComponent } from 'src/login-page/Modals/genre-selection-modal/genre-selection-modal.component';
import { GenreSearchPipe } from 'src/helpers/pipes/genreSearchPipe';
import { GenreSortPipe } from 'src/helpers/pipes/genreSortPipe';
import { OpenLibraryService } from 'src/services/openLibraryService';
import { StarRatingModule } from 'angular-star-rating';
import { RateBooksModalComponent } from 'src/login-page/Modals/rate-books-modal/rate-books-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    LogInComponent,
    HeaderComponent,
    SecurityQuestionsModalComponent,
    RateBooksModalComponent,
    FooterComponent,
    GenreSearchPipe,
    GenreSortPipe,
    GenreSelectionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    ThemeService,
    LoginService,
    OpenLibraryService,
    GlobalStateManagementService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
