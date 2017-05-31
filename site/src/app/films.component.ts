import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Entry } from './film';
import { FilmService } from './film.service';


@Component({
  selector: 'my-films',
  styleUrls: ['./films.component.css'],
  templateUrl: './films.component.html',
  })

export class FilmsComponent implements OnInit{
  films: Entry[];
  selectedFilm: Entry;

  constructor(
    private router: Router,
    private filmService: FilmService) { }

  getFilms(): void {
    this.filmService.getFilms().then(films => this.films = films);
  }

  ngOnInit(): void {
    this.getFilms();
  }

  onSelect(film: Entry): void {
    this.selectedFilm = film;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFilm.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.filmService.create(name)
      .then(film => {
        this.films.push(film);
        this.selectedFilm = null;
      });
  }

  addEntry() {
    this.router.navigate(['/detail', '']);
  }

  delete(film: Entry): void {
    this.filmService
        .delete(film.id)
        .then(() => {
          this.films = this.films.filter(f => f !== film);
          if (this.selectedFilm === film) { this.selectedFilm = null; }
        });
  }
}

