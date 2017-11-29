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

  selectedHero: Hero;

  // Part 4
  getHeroes() : void {
    this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

 

  ngOnInit() {
    //Part 5
    this.getHeroes();
  }

}
