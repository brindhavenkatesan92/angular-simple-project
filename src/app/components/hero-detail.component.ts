import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroAppService } from '../services/hero-app.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector:'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./css/hero-detail.css']
})
export class HeroDetailComponent implements OnInit{
    hero:Hero;
    constructor( private heroService: HeroAppService, private route: ActivatedRoute, private location: Location  ){
    }
    ngOnInit():void{
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe((hero:Hero) => this.hero = hero);
    }
        goBack():void{
            this.location.back();
        }
    
}