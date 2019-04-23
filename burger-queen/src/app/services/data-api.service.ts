import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {DataApi} from '../services/data-api.model';
import { Observable } from 'rxjs';
// import { ServiceSecondService } from '../pedido/service-second.service';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  productCollection;
  products: Observable<DataApi[]>;
  productDoc;
  orderUser;
  
  constructor(public firestore: AngularFirestore) { 
    // this.dataOrderService.currentDataMenu.subscribe(desayuno => {
    //   this.orderUser = desayuno;
    // })
  }
   getData () {
    return this.firestore.collection('menus').valueChanges();
   }

   sendData(obtjData) {
     console.log(obtjData);
    return this.firestore.collection('orderUser').add(obtjData);

   }

   getOrder() {
    return this.firestore.collection('orderUser').valueChanges();
   }
   
  // getData() {
  //   return this.firestore.collection('menus').snapshotChanges()
  //   .pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data();
  //       const id = a.payload.oldIndex;
  //       return {id,...data};
  //     }))
  //   )
  // }
}
