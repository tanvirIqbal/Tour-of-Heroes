import { Injectable } from '@angular/core';
// Observable Step 1 : Import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators';

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
  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService : Fetched Heroes');
  //   return of(HEROES);
  // }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl).pipe(
    tap(heroes => this.log(`fetched heroes`)),
    catchError(this.handleError('getHeroes', [])));
  
}

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
