import { IAutocomplete } from './../../../dto/IAutocomplete';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generar-cita',
  templateUrl: './generar-cita.component.html',
  styleUrls: ['./generar-cita.component.sass']
})
export class GenerarCitaComponent implements OnInit {

  completeAuto: IAutocomplete = {
    id:0,
    name: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  combo(pedido: IAutocomplete): void{
    this.completeAuto = pedido;
console.log(' pedido ', pedido)
  }
}
