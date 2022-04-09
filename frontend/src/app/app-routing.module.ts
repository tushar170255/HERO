import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent } from './pages/signupneedy/signupneedy.component';
import {SignupheroComponent } from './pages/signuphero/signuphero.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignuputilComponent } from './pages/signuputil/signuputil.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full",
  },

  {
    path:'signupneedy',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'signuphero',
    component:SignupheroComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch:'full',

  },
  {path: 'signuputil',
  component: SignuputilComponent,
  pathMatch:'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
