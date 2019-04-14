import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import {ServicesSecondComponent} from '../services-second/services-second.component';


@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})

export class SectionMenuComponent implements OnInit {

  // @Output() mensajeDesdeMenu = new EventEmitter<string>();

  public breakfastMenu = [];
  public dataDesayuno = {};
  constructor(private firestoreService:DataApiService, 
    private dataService: ServicesSecondComponent) { 
      this.dataService.currentDataMenu.subscribe(desayuno => {
        this.dataDesayuno = desayuno;
      })
    }

  ngOnInit() {

  }
  filterData(typeMenu: string){
    this.firestoreService.getData()
    .subscribe((menu) => {
      const filterMenu = menu.filter((obj: any) => {
        if(obj.item === typeMenu){
          console.log(obj);
          return obj;
        }
      })
      this.breakfastMenu = filterMenu;
      console.log(this.breakfastMenu);
    } )
  }

  enviarMensaje(menu: string){
    console.log(menu);
    const data = menu;
    
    this.dataService.printDataMenu(data);
  }

}
