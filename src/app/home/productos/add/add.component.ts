import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  tituloAgregar: string = 'Guardar Producto';
  tituloBoton: string = 'Guardar';
  

  constructor(
  ) { }

  ngOnInit(): void {
  

  }


}
