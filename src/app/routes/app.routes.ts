import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


//Include all the components that has to be routed....
import {UserComponent} from '../components/user.component';
import {AboutComponent} from '../components/about.component';


const routes: Routes = [{
    path:'',
    component: UserComponent
},{
    path:'about',
    component: AboutComponent
}]

export const routingComponents:ModuleWithProviders = RouterModule.forRoot( routes );


