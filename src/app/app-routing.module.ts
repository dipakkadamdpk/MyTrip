import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightDetailsComponent} from'..//app/flight-details/flight-details.component'

    
const routes:Routes= [{path:"mFlightDetails",component:FlightDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
