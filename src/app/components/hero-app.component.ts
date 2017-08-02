import { Component } from '@angular/core';
@Component({
   selector:'hero-app',
   template:`
    <h2>{{title}}</h2>
    <a routerLink="heroes">Heroes</a>
    <a routerLink="dashboard">Dashboard</a>    
    <router-outlet></router-outlet>
   `,
})
export class HeroAppComponent{
    title:string = "Tour of Heroes";
}