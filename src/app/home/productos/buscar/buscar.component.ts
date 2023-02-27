import { IUploadImages, IUploadImagesProductos } from './../../../models/IUpload';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UrlServer } from 'src/app/models/enum.model';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { IProducto } from '../models';
import { ProductosService } from '../productos.service';
import { IProductoDto, Producto } from '../models/IProducto.model';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.sass']
})
export class BuscarComponent implements OnInit, OnDestroy {

  buscar = '';
  subscription: Subscription;

  iProducto: Array<IProducto> = [];
  listaProductosDto: Array<IProductoDto> = [];
  constructor(
    private readonly service: ProductosService
  ) { 
    this.subscription = new Subscription();
  }


  ngOnInit(): void {

    

    this.searchProductosBy();
  }

  buscarPor( buscar: string): void{
    if( buscar !== ''){
      this.obtenerDatosContains(buscar);
    }else{
      
      
    }
  }

  private obtenerDatosContains(buscar: string){
    this.subscription.add(
      this.service.getDataBy<Array<IProducto>, string>(UrlServer.OBTENER_DATOS_PRODUCTOS_BY, buscar).subscribe((res)=>{
       this.iProducto = res;
      },(err)=>{
        console.error(err, " errprrrrrrrr ")
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
        this.listaProductosDto = this.service.paginationImages(res.datos);
      },(err)=>{
        console.error(err, " errprrrrrrrr ")
      })
    );
  }




  ngOnDestroy(): void {
    if( this.subscription !== null ){
      this.subscription.unsubscribe();
    } 
  }

}
