import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TripTypesComponent } from './trip-types/trip-types.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StucturalDirectiveComponent } from './stuctural-directive/stuctural-directive.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';
import { NgSwitchFruitDemoComponent } from './ng-switch-fruit-demo/ng-switch-fruit-demo.component';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';
import { DKCustomeDirectiveDirective } from './dkcustome-directive.directive';
import { NgModelTwoWayDataBindingDemoComponent } from './ng-model-two-way-data-binding-demo/ng-model-two-way-data-binding-demo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TripTypesComponent,
    InterpolationComponent,
    StucturalDirectiveComponent,
    NgSwitchDemoComponent,
    NgSwitchFruitDemoComponent,
    AttributeDirectiveDemoComponent,
    DKCustomeDirectiveDirective,
    NgModelTwoWayDataBindingDemoComponent,
    AboutUsComponent,
    ContactUsComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot([{path:"aboutus",component:AboutUsComponent},{path:"contactus",component:ContactUsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
