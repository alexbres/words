import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FilmService }  from './film.service';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail.component';
import { FilmSearchComponent } from './film-search.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    FilmsComponent, 
    FilmDetailComponent,
    FilmSearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    FilmService
  ],
})

export class AppModule { }
