import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  enviarApedido: string;

  mensajeParaSectionUser(mensaje: string){
    console.log(mensaje);
    this.enviarApedido = mensaje;
  }

  constructor() { }

  ngOnInit() {
  }

}
