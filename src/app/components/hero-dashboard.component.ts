import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroAppService} from '../services/hero-app.service';


@Component({
    selector:'<hero-dashboard>',
    templateUrl:'app/components/hero-dashboard.component.html',
    styleUrls: ['./css/dashboard.css']
})
export class HeroDashBoardComponent implements OnInit{
   ngOnInit(){
       this.getHeroes();
   }
   heroes:Hero[];
   constructor( private heroService: HeroAppService  ){
   }
   getHeroes():void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
   }
}