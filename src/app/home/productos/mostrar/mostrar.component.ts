import { Component, Input, OnDestroy, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { ICarrito } from '../../carrito/models';
import { IProducto } from '../models';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.sass']
})
export class MostrarComponent implements OnInit, OnDestroy {

  @Input() listaProductos: Array<IProducto>;

   carritoVenta: Array<ICarrito> = [];
  subscription: Subscription;
  constructor(
    private readonly service: ServiceGenericoService,
    private readonly router: Router,
    private readonly ngZone:NgZone) {


    this.subscription =  new Subscription();
   }


  ngOnInit(): void {
  }


  agregarProducto(valor: string, item: IProducto): void{
        console.log(
      item, ' ad dsd'
    );


    const producto: ICarrito = {
      id: item.id,
      cantidad: Number(valor),
      precio: item.tamanoProducto.precioPieza,
      producto: item.nombreProducto
    };
 
    if (this.carritoVenta.hasOwnProperty(producto.id as any)) {
      producto.cantidad = this.carritoVenta[producto.id as any].cantidad + 1;
      producto.precio = this.carritoVenta[producto.id as any].precio + item.tamanoProducto.precioPieza;
  }

  this.carritoVenta[producto.id as any] = { ...producto }
  const carrito2 : Array<ICarrito> = this.carritoVenta.filter(f=> f !== null )

  console.log(this.carritoVenta, ' carrito ');
  sessionStorage.setItem('carritoVenta', JSON.stringify(carrito2));

    this.service.sumarProducto.emit(item);
    this.service.sumarCantidad.emit(parseInt(valor));
  }
  disminuirProducto(valor: string, item: IProducto): void{
        console.log(
      item, ''
    );
    this.service.restarProducto.emit(item);
    this.service.restarCantidad.emit(parseInt(valor));
  }


  editarProducto(valor: string, item: IProducto): void{
    console.log(item);
    this.ngZone.run(()=> this.router.navigate(['productos/update',valor]));
  }

  ngOnDestroy(): void {
    if( this.subscription!){
      this.subscription.unsubscribe();
    }
  }
}
