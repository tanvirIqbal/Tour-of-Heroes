import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
//step 1
import { HeroesService } from './heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Part 3
  constructor(private heroService : HeroesService) { }

  //hero = 'Windstorm';
  // hero : Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };
  // Part 2
  heroes: Hero[];

  //selectedHero: Hero;

  // Part 4
  // getHeroes() : void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  // Observable Step 3 : Subscribe
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    //Part 5
    this.getHeroes();
  }

}
