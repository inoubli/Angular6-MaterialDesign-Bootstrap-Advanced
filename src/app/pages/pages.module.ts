import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TableModule } from 'primeng/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeSeekerComponent } from './home-seeker/home-seeker.component';
import { ProjectOffersComponent } from './project-offers/project-offers.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MDBBootstrapModule.forRoot(),
    TableModule,
    HttpClientModule
  ],
  declarations: [DashboardComponent, HomeSeekerComponent, ProjectOffersComponent, ProfileComponent]
})
export class PagesModule { }
