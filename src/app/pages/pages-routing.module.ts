import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeSeekerComponent } from './home-seeker/home-seeker.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProjectOffersComponent } from './project-offers/project-offers.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/homeSeeker' ,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'homeSeeker',component:HomeSeekerComponent},
  {path:'projectOffers/:id',component:ProjectOffersComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
