import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TableModule } from 'primeng/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeSeekerComponent } from './home-seeker/home-seeker.component';
import { ProjectOffersComponent } from './project-offers/project-offers.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableModule
    
  ],
  declarations: [DashboardComponent, HomeSeekerComponent, ProjectOffersComponent]
})
export class PagesModule { }
