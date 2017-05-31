import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Entry } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'my-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    @Input()
    entry: Entry;

    save(): void {
        this.filmService.update(this.entry)
        .then(() => this.goBack());
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.filmService.getFilm(+params['id']))
            .subscribe(entry => this.entry = entry);
    }

    goBack(): void {
        this.location.back();
    }
}