import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { ServiceSecondService } from '../service-second.service';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})

export class SectionMenuComponent implements OnInit {

  public breakfastMenu = [];
  public dataDesayuno = {};
  constructor(private firestoreService:DataApiService, 
    private dataService: ServiceSecondService) { 
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
          return obj;
        }
      })
      this.breakfastMenu = filterMenu;
    } )
  }

  enviarMensaje(menu: any){

    const data = {
      ...menu,
      cantidad:1,
      subtotal: menu.precio,
    }
    
    this.dataService.printDataMenu(data);
  }

}
