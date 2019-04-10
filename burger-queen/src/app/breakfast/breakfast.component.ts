import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  public breakfastMenu = [];
  constructor( private firestoreService:DataApiService ) { }

  ngOnInit() {
    this.firestoreService.getData()
    .subscribe((menu) => {
      this.breakfastMenu = this.breakfastMenu.concat(menu);
      return this.breakfastMenu;
    } )
  }

}
