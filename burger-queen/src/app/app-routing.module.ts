import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { RolsComponent } from './rols/rols.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LunchComponent } from './lunch/lunch.component';
import { NavbarComponent } from './pedido/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'rols', component: RolsComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'pedido',
   component: PedidoComponent,
  children: [
    { path: 'navbar', component: NavbarComponent},
    { path: 'desayuno', component: BreakfastComponent},
    { path: 'almuerzo', component: LunchComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
