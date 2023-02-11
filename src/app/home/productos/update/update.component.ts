import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { Estatus } from './../../../models/IEstatus';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Producto, TamanioProducto } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../models';
import { IResponseGeneric } from 'src/app/dto/IResponseGeneric';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit, AfterViewInit {
  tituloAgregar: string = 'Actualizar Producto';
  tituloBoton: string = 'Actualizar';
  producto: IProducto;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ServiceGenericoService

  ) {

   }
  ngAfterViewInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.getProducto(Number(heroId));
  }

  ngOnInit(): void {


  }
  getProducto(id: number): void{
    this.service.getDataBy<IResponseGeneric<IProducto>,Number>('productos',id).subscribe((success)=>{
      if(success.code === "200 OK"){
        this.producto = success.datos;
      }
console.log(success)
    },(error: any)=>{
      console.log(error)
    });
  }

}
