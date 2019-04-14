import { Component, OnInit} from '@angular/core';
import {ServicesSecondComponent} from '../services-second/services-second.component';


@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {

  contador: number = 1;
  date: any;
  public breakfastMenu = [];
  public dataDesayuno = {};
  
  constructor(private dataService: ServicesSecondComponent) { 
    this.dataService.currentDataMenu.subscribe(data => {
      console.log(data);
      this.dataDesayuno = data;
    })
  }

  ngOnInit() {   
    this.date = new Date()
  }

  // sumar(cantidad) {
  //  this.contador += cantidad;
  // }

  // restar(cantidad) {
  //   this.contador -= cantidad;
  //  }

  // delete(data) {
  //   this.dataDesayuno
  // }

  // multiplication(value1, value2) {
  //   const quantity = value1;
  //   const price = value2;
    
  // }

  // totalAmount(contador) {
  //  const products = this.dataDesayuno;
  //  var total = 0;
  //       for (var i = 0; i < $scope.producto.length; i++) {
  //           var producto = $scope.producto[i];
  //           total += this.producto;
  //       }
  //       return total;
  // }

}
