import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.sass']
})
export class AgregarClienteComponent implements OnInit, AfterViewInit {

  modelInput: any  = '';
  constructor() { }

dato = 'Vamos';
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modelInput = '';
  }

  diste(){
  }

}
