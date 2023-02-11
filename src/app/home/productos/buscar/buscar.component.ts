import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UrlServer } from 'src/app/models/enum.model';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { IProducto } from '../models';


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
    private readonly service: ServiceGenericoService
  ) { 
    this.subscription = new Subscription();
  }


  ngOnInit(): void {

    this.obtenerDatos();
  }

  buscarPor( buscar: string): void{
    console.log( buscar);
    if( buscar !== ''){
      this.obtenerDatosContains(buscar);
    }else{
      this.obtenerDatos();
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

  private obtenerDatos(){
    this.subscription.add(
      this.service.getData<any>(UrlServer.OBTENER_DATOS_PRODUCTOS).subscribe((res)=>{
        this.iProducto = res.datos;
        console.log(this.iProducto)
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
