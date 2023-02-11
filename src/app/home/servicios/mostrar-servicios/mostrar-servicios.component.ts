import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.component.html',
  styleUrls: ['./mostrar-servicios.component.sass']
})
export class MostrarServiciosComponent implements OnInit {

  clientes: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.clientes = this.getUrl();
  }


  private getUrl(){
    return [
      {
        url: '../../servicios/mostrar',
        nombre:'servicios'
      },
      {
        url: '../../productos/mostrar',
        nombre:'productos'
      },
      {
        url: '../../clientes/mostrar',
        nombre:'clientes'
      },
      {
        url: '',
        nombre:''
      },
      {
        url: '',
        nombre:''
      }
    ]
  }
}
