import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  declarations: [DashboardComponent]
})
export class PagesModule { }
