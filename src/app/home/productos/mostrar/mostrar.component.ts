import { Component, Input, OnDestroy, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImagen } from 'src/app/models';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { ICarrito } from '../../carrito/models';
import { IProducto } from '../models';
import { IProductoDto } from '../models/IProducto.model';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.sass']
})
export class MostrarComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() listaProductosDto: Array<IProductoDto> = [];

  interSa: number = 0;

  listaEjemplos: Array<IImagen> = [];
  listaShow: Array<any> = [];
   carritoVenta: Array<ICarrito> = [];
  subscription: Subscription;
  constructor(
    private readonly service: ServiceGenericoService,
    private readonly router: Router,
    private readonly ngZone:NgZone) {


    this.subscription =  new Subscription();
   }
  ngAfterViewInit(): void {


  }



  ngOnInit(): void {

    this.listaShow = this.listaImg();
  }


  agregarProducto(valor: string, item: IProducto): void{

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

  sessionStorage.setItem('carritoVenta', JSON.stringify(carrito2));

    this.service.sumarProducto.emit(item);
    this.service.sumarCantidad.emit(parseInt(valor));
  }
  disminuirProducto(valor: string, item: IProducto): void{
    this.service.restarProducto.emit(item);
    this.service.restarCantidad.emit(parseInt(valor));
  }


  editarProducto(valor: string, item: IProducto): void{
    this.ngZone.run(()=> this.router.navigate(['productos/update',valor]));
  }

  siguiente(sig: any){

    this.listaEjemplos = sig.imagenes;
  }

  ngOnDestroy(): void {
    if( this.subscription!){
      this.subscription.unsubscribe();
    }
  }

  private listaImg(){
    return [
      {
        id:0,
        show:'./../../../../assets/image/android.jpg'
      },
      {
        id:1,
        show:'./../../../../assets/image/vpn.png'
      },
      {
        id:2,
        show:'./../../../../assets/image/dell.png'
      }
    ]
  }
}
