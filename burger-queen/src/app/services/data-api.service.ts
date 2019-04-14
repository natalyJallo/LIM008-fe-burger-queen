import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {DataApi} from '../services/data-api.model';
import { Observable } from 'rxjs';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  productCollection;
  products: Observable<DataApi[]>;
  productDoc;
  
  constructor(public firestore: AngularFirestore) { 
     
  }
   getData () {
    return this.firestore.collection('menus').valueChanges();
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
