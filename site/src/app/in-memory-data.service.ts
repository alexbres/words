import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let films = [
      {id: 11, word: 'Mr. Nice'},
      {id: 12, word: 'Narco'},
      {id: 13, word: 'Bombasto'},
      {id: 14, word: 'Celeritas'},
      {id: 15, word: 'Magneta'},
      {id: 16, word: 'RubberMan'},
      {id: 17, word: 'Dynama'},
      {id: 18, word: 'Dr IQ'},
      {id: 19, word: 'Magma'},
      {id: 20, word: 'Tornado'}
    ];
    return {films};
  }
}
