import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PointwiseComponent } from './components/pointwise/pointwise.component';
import { SculptorComponent } from './components/sculptor/sculptor.component';
import { TecplotComponent } from './components/tecplot/tecplot.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'pointwise', component: PointwiseComponent},
  { path: 'sculptor', component: SculptorComponent},
  { path: 'tecplot', component: TecplotComponent},
  { path: 'team', component: TeamComponent},
  { path: 'downloads', component: DownloadsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'events', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
