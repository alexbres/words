import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Film }           from './film';

@Injectable()
export class FilmSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Film[]> {
    return this.http
               .get(`app/films/?name=${term}`)
               .map(response => response.json().data as Film[]);
  }
}
