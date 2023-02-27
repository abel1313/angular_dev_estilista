import { ProductosService } from './../productos.service';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { Estatus } from './../../../models/IEstatus';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Producto, TamanioProducto } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../models';
import { IResponseGeneric } from 'src/app/dto/IResponseGeneric';
import { Subscription } from 'rxjs';
import { IProductoDto } from '../models/IProducto.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit, AfterViewInit {
  tituloAgregar: string = 'Actualizar Producto';
  tituloBoton: string = 'Actualizar';
  producto: IProducto;
  listaProductosDto: Array<IProductoDto> = []
  subscription: Subscription;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProductosService

  ) {

    this.subscription =  new Subscription();
   }
  ngAfterViewInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.getProducto(Number(heroId));
  }

  ngOnInit(): void {

this.getAllProductor();
  }


  getAllProductor(){
    const page = 0;
    const size = 9;
    this.subscription.add(
      this.service.getPaginations<any>('productos/searchProducts',page,size).subscribe((res: any)=>{
        this.listaProductosDto = this.service.paginationImages(res.datos);
  
      },(err)=>{
        console.error(err, " errprrrrrrrr ")
      })
    );
  }
  
  getProducto(id: number): void{
    this.service.getDataBy<IResponseGeneric<IProducto>,Number>('productos',id).subscribe((success)=>{
      if(success.code === "200 OK"){
        this.producto = success.datos;
      }

    },(error: any)=>{
      console.error(error)
    });
  }

}
