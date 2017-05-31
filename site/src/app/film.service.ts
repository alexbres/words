import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Entry } from './film';

@Injectable()
export class FilmService {

    private filmsUrl = 'api/films';  // URL to web api

    constructor(private http: Http) { }

    getFilms(): Promise<Entry[]> {
        return this.http.get(this.filmsUrl)
            .toPromise()
            .then(response => response.json().data as Entry[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getFilm(id: number): Promise<Entry> {
        const url = `${this.filmsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Entry)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(film: Entry): Promise<Entry> {
        const url = `${this.filmsUrl}/${film.id}`;
        return this.http
            .put(url, JSON.stringify(film), { headers: this.headers })
            .toPromise()
            .then(() => film)
            .catch(this.handleError);
    }

    create(name: string): Promise<Entry> {
        return this.http
            .post(this.filmsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Entry)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.filmsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}
