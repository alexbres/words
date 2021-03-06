import { Component, OnInit } from '@angular/core';

import { Entry } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {

  films: Entry[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms()
      .then(films => this.films = films.slice(1, 5));
  }
}

