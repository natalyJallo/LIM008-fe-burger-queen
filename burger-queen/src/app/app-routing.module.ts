import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { RolsComponent } from './rols/rols.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'rols', component: RolsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
