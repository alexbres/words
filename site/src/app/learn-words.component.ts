import { Component, OnInit } from '@angular/core';
//import { Router }   from '@angular/router';

import { Entry } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'my-films',
  styleUrls: ['./films.component.css'],
  templateUrl: './learn-words.component.html',
})

export class LearnWordsComponent implements OnInit {
  entries: Entry[];
  selectedFilm: Entry;

  constructor(
    //private router: Router,
    private entryService: FilmService) { }

  public getEntries(): void {
    this.entryService.getLearnEntries().then(entry => this.entries = entry);
  }

  public next() { }

  ngOnInit(): void {
    this.getEntries();
  }

}  