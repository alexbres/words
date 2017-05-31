import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { FilmSearchService } from './film-search.service';
import { Film } from './film';

@Component({
    selector: 'film-search',
    templateUrl: './film-search.component.html',
    styleUrls: ['./film-search.component.css'],
    providers: [FilmSearchService]
})

export class FilmSearchComponent implements OnInit {
    films: Observable<Film[]>;
    private searchTerms = new Subject<string>();
    
    constructor(
        private filmSearchService: FilmSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.films = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.filmSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Film[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Film[]>([]);
            });
    }

    gotoDetail(film: Film): void {
        let link = ['/detail', film.id];
        this.router.navigate(link);
    }
}
