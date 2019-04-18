import { Component, OnInit} from '@angular/core';
import { ServiceSecondService } from '../service-second.service';
import { Timestamp } from 'rxjs';


@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {
  
  public total: number;
  cantidad: number;
  date: any;
  public numOrder:0;
  public name: string;
  public mesa: number;
  public fecha: Timestamp<1>;
  public breakfastMenu = [];
  public dataDesayuno = {};
  
  
  constructor(private dataService: ServiceSecondService) { 
    this.dataService.currentDataMenu.subscribe(data => {
      this.dataDesayuno = data;
    })
    this.dataService.currentDataTotal.subscribe(total => {
      this.total = total;
    })

  }

  ngOnInit() {   
    this.date = new Date();
  }

  generateNumOrder(nameUser) {
    const nameLength = nameUser.length;
    const nameLetter = nameUser.substring(0,2).toUpperCase();
    this.numOrder = nameLength + nameLetter;
  }

  deleteOrder(orderId: any) {
    this.dataService.deleteDataRequestes(orderId);
  }

  multiplication(event, num) {
     this.dataService.addDataNewObjt(event, num);
  }

  enviarData2() {

      const dataObjt = {
        numOrder: this.numOrder,
        cliente: this.name,
        fecha: this.date,
        mesa: this.mesa,
      }
      if(dataObjt.cliente !== '' && dataObjt.mesa) {
        this.dataService.enviarData(dataObjt);
        
        dataObjt.numOrder = 0;
        dataObjt.cliente = '';
        dataObjt.mesa = undefined;

      } else {
         alert("Ingresa los datos requeridos")
      }
      
  }
    
  
  
}

