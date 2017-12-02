import { Injectable } from '@angular/core';
// Observable Step 1 : Import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroesService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Observable Step 2 : Write Method
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
