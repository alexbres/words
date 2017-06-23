import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/films" routerLinkActive="active">Films</a>
    <a routerLink="/learn-words/11" routerLinkActive="active">Learn words</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of films';
}
