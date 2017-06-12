import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { FilmsComponent }      from './films.component';
import { FilmDetailComponent }  from './film-detail.component';
import { LearnWordsComponent }  from './learn-words.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: FilmDetailComponent },
  { path: 'films',     component: FilmsComponent },
  { path: 'learn-words',     component: LearnWordsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
