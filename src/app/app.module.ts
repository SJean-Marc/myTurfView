import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceListComponent } from './race/component/race-list/race-list.component';
import {FormsModule} from '@angular/forms';
import { ReunionListComponent } from './reunion/component/reunion-list/reunion-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { ReunionDetailComponent } from './reunion/component/reunion-detail/reunion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceListComponent,
    ReunionListComponent,
    ReunionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot( [
      { path: 'reunions', component: ReunionListComponent},
      { path: 'reunions/:id', component: ReunionDetailComponent},
      { path: 'races/:id', component: RaceListComponent},
      { path: '', redirectTo: 'reunions', pathMatch: 'full'},
      { path: '**', redirectTo: 'reunions', pathMatch: 'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
