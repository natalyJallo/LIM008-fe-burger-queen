import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RolsComponent } from './rols/rols.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SectionMenuComponent } from './pedido/section-menu/section-menu.component';
import { DataUserComponent } from './pedido/data-user/data-user.component';
import { FormsModule} from '@angular/forms';
//
import { DataApiService } from './services/data-api.service';
import { ServiceSecondService } from '../app/pedido/service-second.service';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RolsComponent,
    PedidoComponent,
    SectionMenuComponent,
    DataUserComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataApiService,
    ServiceSecondService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }