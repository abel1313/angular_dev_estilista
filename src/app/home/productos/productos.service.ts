import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';

import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { IProducto } from './models';
@Injectable({
  providedIn: 'root'
})
export class ProductosService extends ServiceGenericoService {

  constructor( protected readonly http: HttpClient ) { 
    super(http);
  }

  public getAllProducts<T>(urlService: string,t: T): Observable<any> {
    const url = `${this.uri}/${urlService}`;

    return this.http.post<any>(url,t,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  public getAllProductsMapp(prod: any): any {
    
    const producto: IProducto = {
      id:prod.datos.id,
      tamanoProducto:{
        id:prod.datos.producto.tamanoProducto.id,
        precioPieza:prod.datos.producto.tamanoProducto.precioPieza,
        tipoPieza:prod.datos.producto.tamanoProducto.tipoPieza
      },
      estatusPieza:{
        id:prod.datos.producto.estatusPieza.id,
        activo:prod.datos.producto.estatusPieza.activo
      },
      nombreProducto:prod.datos.producto.nombreProducto
    };

    return producto;
  }




}
