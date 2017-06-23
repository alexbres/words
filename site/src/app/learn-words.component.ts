import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Entry } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'my-film-detail',
  templateUrl: './learn-words.component.html',
  styleUrls: ['./film-search.component.css'],
})
export class LearnWordsComponent implements OnInit {
    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {}

    entry: Entry;
    initialId: number;
    counter: number = 0;

    next(): void {
      if (this.counter <= 10){
        //TODO: get this id from API
        let id = ++this.counter + this.initialId;
        this.filmService.getFilm(id).then(entry => this.entry = entry);
      }        
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                let id: number = +params['id'];
                this.initialId = id;
                return id > 0 ? this.filmService.getFilm(id) : Promise.resolve(new Entry());
            })
            .subscribe(entry => this.entry = entry);
    }
}