import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { RolsComponent } from './rols/rols.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    DesayunoComponent,
    HomeComponent,
    BreakfastComponent,
    LunchComponent,
    RolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
