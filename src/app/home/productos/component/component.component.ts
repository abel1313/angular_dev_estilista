import { ISuper } from 'src/app/models/ISuper.mode';

import { Estatus } from './../../../models/IEstatus';

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProducto } from '../models';
import { Producto } from '../models/IProducto.model';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.sass']
})
export class ComponentComponent implements OnInit {
  formAddProducto: FormGroup;
  @Input() tituloComponente: string = '';
  @Input() tituloBtn: string = '';
  @Input() producto: IProducto;
  constructor(
    private readonly fb: FormBuilder
  ) { }

  private getFormProducto(): void{
    console.log(this.producto,' fuera de ');
    if( !this.producto!){
      this.producto = Producto.iniciarProducto();
    }
    console.log(this.producto,' fuera de ');
  }
  ngOnInit(): void {
this.getFormProducto();
   
    this.formAddProducto = this.fb.group({
      id:[this.producto.id],
      nombreProducto: [this.producto.nombreProducto,[Validators.required]],
      tamanoProducto: this.fb.group({
        id:[this.producto.tamanoProducto.id],
        tipoPieza: [this.producto.tamanoProducto.tipoPieza,[Validators.required]],
        precioPieza: [this.producto.tamanoProducto.precioPieza,[Validators.required, Validators.min(1)]],
      }),
      estatusPieza: this.fb.group({
        id:[this.producto.estatusPieza.id],
        activo: [this.producto.estatusPieza.activo === 1 ? true : false,[Validators.required]]
      })
    });
  }


  guardarProducto(): void{


    this.actualizar()
  }

  guardar(): void{

  }
actualizar(): void{
  let productoExample = this.getInitProducto();
  console.log(productoExample, ' iniciando ');
  const valor = this.formAddProducto.get('estatusPieza.activo')?.value ? 1: 0 ;
  const productoGuardar = this.formAddProducto?.value;
  productoExample = this.formAddProducto?.value;
  console.log(productoExample, ' mas que eso ');
  productoExample.estatusPieza.activo = valor;
  console.log(productoExample, ' mas que eso ');
  const estatus: Estatus = productoGuardar.estatus;

    console.log(this.formAddProducto.patchValue, ' producto ');

  }

  getInitProducto(): IProd{
    return {
      id: 0,
      nombreProducto: '',
      estatusPieza:{
        activo:0
      },
      tamanoProducto:{
        precioPieza: 0,
        tipoPieza: ''
      }
    }
  }

}

export interface IProd extends ISuper{
  nombreProducto: string;
  tamanoProducto: ITamanioProducto;
  estatusPieza: IEstatus;
}
export interface ITamanioProducto extends ISuper{
  tipoPieza: string;
  precioPieza: number;
}
export interface IEstatus extends ISuper{
  activo: number;
}
