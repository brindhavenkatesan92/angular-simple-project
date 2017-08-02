import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroAppService } from '../services/hero-app.service';
import {Hero} from './hero';
@Component({
    selector:'my-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls: ['./css/hero-app.css']
 })
export class HeroesComponent implements OnInit{
    ngOnInit(){
        this.getHeroes();        
    }

    public heroes: Hero[];
    public selectedHero: Hero;
    constructor( private heroAppService: HeroAppService, private router: Router){
    }
    getHeroes(){
        this.heroAppService.getHeroes().then( heroes => this.heroes = heroes);    
    }
    onSelect( hero:Hero ):void{
        this.selectedHero = hero;
    }
    gotoDetails():void{
        this.router.navigate(["/heroapp/detail", this.selectedHero.id]);
    }
}
