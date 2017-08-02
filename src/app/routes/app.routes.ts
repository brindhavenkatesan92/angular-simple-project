import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


//Include all the components that has to be routed....
import {AppComponent } from '../app.component';
import {UserComponent} from '../components/user.component';
import {AboutComponent} from '../components/about.component';
import {ShoppingListComponent} from '../components/shopping-list.component';


import {HeroAppComponent} from '../components/hero-app.component';
import {HeroesComponent} from '../components/heroes.component';
import {HeroDashBoardComponent} from '../components/hero-dashboard.component';
import {HeroDetailComponent} from '../components/hero-detail.component';

const routes: Routes = [{
    path:'',
    redirectTo:'home',   
    pathMatch:'full'
}, {
    path:'home',
    component: UserComponent 
},{
    path:'about',
    component: AboutComponent
},{
    path:'shoppinglist',
    component: ShoppingListComponent
},{
    path:'heroapp',
    component: HeroAppComponent,
    children:[{
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },{
        path:'dashboard',
        component:HeroDashBoardComponent,
    },{
        path:'heroes',
        component: HeroesComponent,
    },{
        path:'detail/:id',
        component: HeroDetailComponent
    }]
}];
export const routingComponents:ModuleWithProviders = RouterModule.forRoot( routes );


