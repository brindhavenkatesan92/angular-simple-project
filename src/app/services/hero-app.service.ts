import { Component, Injectable } from '@angular/core';
import {Hero} from '../components/hero';
import { HEROES } from '../components/hero-mockdata';

@Injectable()
export class HeroAppService{
    constructor(  ){
         
    }
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHero( id:number ):Promise<Hero>{
        return this.getHeroes().then((heroes:Hero[]) => heroes.find( (hero:Hero) => hero.id === id ))
    }   
}