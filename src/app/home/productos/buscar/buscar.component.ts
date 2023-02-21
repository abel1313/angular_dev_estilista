import { IUploadImages, IUploadImagesProductos } from './../../../models/IUpload';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UrlServer } from 'src/app/models/enum.model';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { IProducto } from '../models';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.sass']
})
export class BuscarComponent implements OnInit, OnDestroy {

  buscar = '';
  subscription: Subscription;

  iProducto: Array<IProducto> = [];

  constructor(
    private readonly service: ProductosService
  ) { 
    this.subscription = new Subscription();
  }


  ngOnInit(): void {

    

    this.searchProductosBy();
  }

  buscarPor( buscar: string): void{
    console.log( buscar);
    if( buscar !== ''){
      this.obtenerDatosContains(buscar);
    }else{
      
      
    }
  }

  private obtenerDatosContains(buscar: string){
    this.subscription.add(
      this.service.getDataBy<Array<IProducto>, string>(UrlServer.OBTENER_DATOS_PRODUCTOS_BY, buscar).subscribe((res)=>{
       this.iProducto = res;
        console.log(this.iProducto)
      },(err)=>{
        console.log(err, " errprrrrrrrr ")
      })
    );
  }

  private searchProductosBy(){

    const producto : IUploadImagesProductos = {
      imagenes:[
        {
          nombreImagen:'',
          base64Imagen: '',
          extencionImagen:''
        }
      ],
      producto:{
        estatusPieza: {
          activo:0
        },
        nombreProducto:'',
        tipoPieza:{
          precio:0,
          tipoPieza:''
        }
      },
      page: 0,
      size:5
    };
    const page = 0;
    const size = 9;
    this.subscription.add(
      this.service.getPaginations<any>('productos/searchProducts',page,size).subscribe((res: any)=>{
console.log(res)
      },(err)=>{
        console.log(err, " errprrrrrrrr ")
      })
    );
  }




  ngOnDestroy(): void {
    if( this.subscription !== null ){
      this.subscription.unsubscribe();
    } 
  }

}
