import { Injectable } from '@angular/core';
// Observable Step 1 : Import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable()
export class HeroesService {

  constructor(private messageService : MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Observable Step 2 : Write Method
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : Fetched Heroes');
    return of(HEROES);
  }

}
