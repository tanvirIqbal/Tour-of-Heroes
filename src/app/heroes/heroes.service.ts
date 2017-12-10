import { Injectable } from '@angular/core';
// Observable Step 1 : Import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message/message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroesService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient,private messageService : MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Observable Step 2 : Write Method
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : Fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
