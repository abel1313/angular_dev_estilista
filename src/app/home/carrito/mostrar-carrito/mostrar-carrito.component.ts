import { Component, OnInit, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ConfigDatatable } from 'src/app/models/ConfigDatatable';
import { IProducto } from '../../productos/models';
import { ICarrito } from '../models';
import { IDetalleVentaDto } from 'src/app/dto';
import { DetalleVentaDto } from 'src/app/dto/IDetalleVentaDto';


@Component({
  selector: 'app-mostrar-carrito',
  templateUrl: './mostrar-carrito.component.html',
  styleUrls: ['./mostrar-carrito.component.sass']
})
export class MostrarCarritoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  load: Boolean = false;
  subscription: Subscription;
  listaProductos: Array<IProducto> = [] ;

  carritoVenta: Array<ICarrito> = [] ;

  total: number = 0;

  constructor(
    private readonly ngZone: NgZone,
    private readonly router: Router
  ) { 
    this.subscription = new Subscription();

  }

  ngOnInit(): void {
    this.dtOptions = ConfigDatatable.dtOptions;
    this.listaProductos = JSON.parse(sessionStorage.getItem('producto') as any);
    this.carritoVenta = JSON.parse(sessionStorage.getItem('carritoVenta') as any);
    const detalle: DetalleVentaDto = new DetalleVentaDto();
    detalle.carrito = this.carritoVenta;

    
    const initialValue = 0;
    if( this.carritoVenta! && this.carritoVenta.length > 0){

      this.total = this.carritoVenta.reduce((acc,curr)=>acc+curr.precio,initialValue);
    }
  }

  dale(){
    
  }

  ngAfterViewInit(): void {

    this.dtTrigger.next();

  }
  rerenderTable(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

    this.subscription.unsubscribe();
  }

}
