import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import {DataApiService} from '../services/data-api.service';

export interface SectionOrder {
  cliente: string,
  mesa: string,
  fecha: any,
  productos : ProductosPedidos[],
  total: number,
};


export interface ProductosPedidos {
  id: string,
 nombre: string,
 precio: number,
 cantidad: number,
 subtotal: number,
};

@Injectable({
  providedIn: 'root'
})

export class ServiceSecondService {

  public dataMenuList = new BehaviorSubject([]);
  currentDataMenu = this.dataMenuList.asObservable();
  public dataPedido = new BehaviorSubject(0);
  currentDataTotal = this.dataPedido.asObservable()

  public arrayDataMenu: ProductosPedidos[] = [];
  public dataDelete: any;
  public numData = 0;
  public dataDesayuno = {};

  constructor(private dataService: DataApiService) { 
  }

  printDataMenu(value) {
    // console.log(value.precio)
    this.arrayDataMenu.push(value);
    // console.log()
    this.dataMenuList.next(this.arrayDataMenu);
    this.sumaTotal();
  }

  addDataNewObjt(objt, cantidadEditada) {
     this.arrayDataMenu = this.arrayDataMenu.map(element => {
    
       if(element.id === objt.id ) {
          const newObjt = {
           ...element,
           cantidad: cantidadEditada,
           subtotal: cantidadEditada * element.precio
         }
          return  newObjt;
       } 
      return element;
    });
    this.dataMenuList.next(this.arrayDataMenu);
    
    this.sumaTotal();
  }

  sumaTotal() {
    this.numData = 0;
      for (let i = 0; i < this.arrayDataMenu.length; i++) {
        console.log(this.arrayDataMenu)
        this.numData += this.arrayDataMenu[i].subtotal;
        console.log(this.arrayDataMenu[i].subtotal)
      }
      this.dataPedido.next(this.numData);
  }

  deleteDataRequestes(dataOrderId) {
    console.log(dataOrderId)
    this.arrayDataMenu = this.arrayDataMenu.filter(elemt => elemt.id !== dataOrderId); 
      this.dataMenuList.next(this.arrayDataMenu);
      this.sumaTotal();
  }

  enviarData(dataPedido){
    const modelOrder: SectionOrder = {
        ...dataPedido,
        productos: this.arrayDataMenu,
        total: this.numData,
    }
    console.log(this.arrayDataMenu)
    console.log(modelOrder);
    return this.dataService.sendData(modelOrder);
  } 

}
      
