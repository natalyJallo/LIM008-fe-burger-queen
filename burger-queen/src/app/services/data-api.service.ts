import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import {DataApi} from '../services/data-api.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  constructor(private firestore: AngularFirestore) { }

  getData() {
    return this.firestore.collection('menus').snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.oldIndex;
        return {id,...data};
      }))
    )
  }

}
