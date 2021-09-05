import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserListModule } from './user-list/user-list.module';
import { ChartComponent } from './chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserListModule,
    GoogleChartsModule  ]
})
export class HomeModule { }
