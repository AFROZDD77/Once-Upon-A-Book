import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from 'src/login-page/Components/log-in/log-in.component';
import { SignUpPageComponent } from 'src/login-page/Components/SignUpPageCompnent/signUp.component';

const routes: Routes = [
    {path: 'signUp', component: SignUpPageComponent},
    {path: 'logIn', component: LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
