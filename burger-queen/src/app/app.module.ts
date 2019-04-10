import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { RolsComponent } from './rols/rols.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NavbarComponent } from './pedido/navbar/navbar.component';
import { SectionMenuComponent } from './pedido/section-menu/section-menu.component';
import { DataUserComponent } from './pedido/data-user/data-user.component';
import { DataMenuComponent } from './pedido/data-menu/data-menu.component';
import { LunchComponent } from './lunch/lunch.component';

//
import { DataApiService } from './services/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BreakfastComponent,
    RolsComponent,
    PedidoComponent,
    NavbarComponent,
    SectionMenuComponent,
    DataUserComponent,
    DataMenuComponent,
    LunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
