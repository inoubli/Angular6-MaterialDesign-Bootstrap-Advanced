import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
 
  {path:'' , redirectTo:'/signin', pathMatch:'full' },
  {path:'signup',  component:SignUpComponent },
  {path:'signin' , component:SignInComponent },
  {path:'pages', loadChildren: './pages/pages.module#PagesModule',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
