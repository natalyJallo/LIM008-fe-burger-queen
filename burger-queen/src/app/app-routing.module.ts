import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RolsComponent } from './rols/rols.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SectionMenuComponent } from './pedido/section-menu/section-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rols', component: RolsComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'pedido',
   component: PedidoComponent,
  children: [
    { path: 'section-menu', component: SectionMenuComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
