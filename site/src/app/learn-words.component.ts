import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
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
        private location: Location
    ) {}

    entry: Entry;

    save(): void {
        if (this.entry.id === undefined) {
            this.filmService.create(this.entry)
                .then(() => this.goBack());
        } else {
            this.filmService.update(this.entry)
                .then(() => this.goBack());
        }
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                let id: number = +params['id'];
                return id > 0 ? this.filmService.getFilm(id) : Promise.resolve(new Entry());
            })
            .subscribe(entry => this.entry = entry);
    }

    goBack(): void {
        this.location.back();
    }
}