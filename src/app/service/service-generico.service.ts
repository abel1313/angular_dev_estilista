import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { IProducto } from '../home/productos/models';
import { IImagen, IUploadImages } from '../models';




@Injectable({
  providedIn: 'root'
})
export abstract class ServiceGenericoService {

  protected readonly uri = 'http://127.0.0.1:8080/proyecto';

   sumarCantidad = new EventEmitter<number>();
   sumarProducto = new EventEmitter<IProducto>();
   restarProducto = new EventEmitter<IProducto>();
   restarCantidad = new EventEmitter<number>();

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor( protected readonly http: HttpClient ) { }

  getData<R>(urlService: string): Observable<R> {
    const url = `${this.uri}/${urlService}`
    return this.http.get<R>(url,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  getDataBy<R, D>(urlService: string, dato: D): Observable<R> {
    const url = `${this.uri}/${urlService}/${dato}`;
    console.log(url)
    return this.http.get<R>(url,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postData<T,R>(t: T, urlService: string): Observable<R> {
    const url = `${this.uri}/${urlService}`
    return this.http.post<R>(url, t, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  getDataByPersonalizado(urlService: string, dato: number): Observable<IUploadImages> {
    const url = `${this.uri}/${urlService}/${dato}`;
    return this.http.get<IUploadImages>(url,this.httpOptions)
      .pipe(
        map(this.getDatMap),
        retry(2),
        catchError(this.handleError)
      );
  }
  private getDatMap(datos: IUploadImages): IUploadImages{
  const imgs: Array<IImagen> = datos.imagenes.map(m=>{
    const imf = {
      nombreImagen: m.nombreImagen,
      extencionImagen: m.extencionImagen,
      base64Imagen: `data:image/${m.extencionImagen};base64,${m.base64Imagen}`
    }
    return imf;
  });
  datos.imagenes = imgs;
  return datos;
  }


  
  protected handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => error);
  }
}
