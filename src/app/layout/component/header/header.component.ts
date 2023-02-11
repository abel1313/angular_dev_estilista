import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICarrito } from 'src/app/home/carrito/models';
import { IProducto } from 'src/app/home/productos/models';

import { ServiceGenericoService } from 'src/app/service/service-generico.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  cantidad = 0;
  listaProductos: Array<IProducto>;

  constructor(private readonly service: ServiceGenericoService) {

    this.subscription =  new Subscription();
    this.listaProductos = [];
   }
  ngOnInit(): void {

    this.obtenerCantidad();
    this.disminuirCantidad();

    this.obtenerProducto();
    this.disminuirProducto();

  }


  click(){
    
    const carrito : Array<ICarrito> =  JSON.parse(sessionStorage.getItem('carritoVenta') as any);
    

    
    console.log( carrito, ' Sesiones por aca ');

    sessionStorage.setItem('producto', JSON.stringify(this.listaProductos));
  }

  obtenerCantidad(): void{

    this.subscription.add(
      this.service.sumarCantidad.subscribe((res: number)=> this.cantidad = this.cantidad + res)
    );
  }

  disminuirCantidad(): void{
    this.subscription.add(
      this.service.restarCantidad.subscribe((res: number)=>{
        if ( this.cantidad > 0 ){
          this.cantidad -= res;
        }
      })
    );
  }

  obtenerProducto(): void{

    this.subscription.add(
      this.service.sumarProducto.subscribe((res: IProducto)=> {
        this.listaProductos.push(res)
        
      })
    );

  }

  disminuirProducto(): void{
    this.subscription.add(
      this.service.restarProducto.subscribe((res: IProducto)=>{
        for( var i = 0; i < this.listaProductos.length; i++){ 
          if (  this.listaProductos[i].id === res.id) { 
            this.listaProductos.splice(i, 1); 
          }
      }
      })
    );

    
  }

  
  ngOnDestroy(): void {
    if( this.subscription !== null ){
      this.subscription.unsubscribe();
    }
  }
}
