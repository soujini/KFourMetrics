import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { AboutComponent } from './components/about/about.component';
import { PointwiseComponent } from './components/pointwise/pointwise.component';
import { PointwiseBenefitsComponent } from './components/pointwise-benefits/pointwise-benefits.component';
import { SculptorComponent } from './components/sculptor/sculptor.component';
import { SculptorBenefitsComponent } from './components/sculptor-benefits/sculptor-benefits.component';
import { TecplotComponent } from './components/tecplot/tecplot.component';
import { TeamComponent } from './components/team/team.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { EventsComponent } from './components/events/events.component';
import { CalenderHeaderComponent } from './components/calender-header/calender-header.component';
import { HistoryComponent } from './components/history/history.component';
import { ProductsComponent } from './components/products/products.component';
import { TrainingComponent } from './components/training/training.component';
import { TrainComponent } from './components/train/train.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollerComponent,
    FooterComponent,
    ProfileComponent,
    WelcomeComponent,
    HomeComponent,
    DeveloperComponent,
    AboutComponent,
    PointwiseComponent,
    PointwiseBenefitsComponent,
    SculptorComponent,
    SculptorBenefitsComponent,
    TecplotComponent,
    TeamComponent,
    DownloadsComponent,
    DistributorsComponent,
    EventsComponent,
    CalenderHeaderComponent,
    HistoryComponent,
    ProductsComponent,
    TrainingComponent,
    TrainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory
})
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
