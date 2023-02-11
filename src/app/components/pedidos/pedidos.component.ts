import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAutocomplete } from 'src/app/dto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.sass']
})
export class PedidosComponent implements OnInit {

  @Output() respuestaCombo = new EventEmitter<IAutocomplete>();

  comboPedido: IComboPedidos[] =[];
  keyword = 'name';
  data: Array<IAutocomplete> = [
    {
      id: 1,
      name: 'Georgia'
    },
     {
       id: 2,
       name: 'Usa'
     },
     {
       id: 3,
       name: 'England'
     }
  ];

  constructor() { }

  ngOnInit(): void {
    this.comboPedido = this.getNameCombo() || [];
  }

  selectEvent(item: any) {
    // do something with selected item

    console.log(item);
    this.respuestaCombo.emit(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    // do something when input is focused
  }
  private getNameCombo():IComboPedidos[ ] {
    return [
      {
        index:0,
        nombre: 'Elegir ...'
      },      {
        index:1,
        nombre: 'Opcion 1'
      },      {
        index:2,
        nombre: 'Opcion 2'
      }
    ]
  }
}

interface IComboPedidos{
  index: number;
  nombre: string;
}
