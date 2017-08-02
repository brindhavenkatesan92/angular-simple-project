import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

//App1
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';

//App2
import { ShoppingListComponent }  from './components/shopping-list.component';

//App3
import { HeroAppComponent }  from './components/hero-app.component';
import { HeroesComponent }  from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroDashBoardComponent } from './components/hero-dashboard.component';


//Services ... It is not imported individually in each since it may be imported by every single view
import { HeroAppService } from './services/hero-app.service';




//routing
import {routingComponents} from './routes/app.routes';


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routingComponents],
  declarations: [ AppComponent, UserComponent, AboutComponent, ShoppingListComponent, HeroAppComponent, HeroDetailComponent, HeroesComponent, HeroDashBoardComponent ],
  providers: [HeroAppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


