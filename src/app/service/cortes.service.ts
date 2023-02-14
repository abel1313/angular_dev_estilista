import { ResponseGeneric } from './../dto/IResponseGeneric';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceGenericoService } from './service-generico.service';
import { IImagen, IUploadImages } from '../models';


import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CortesService extends ServiceGenericoService {

  constructor( protected readonly http: HttpClient ) { 
    super(http);
  }

  public getAllCortes(urlService: string, dato: string): Observable<ResponseGeneric<Array<IUploadImages>>> {
    const url = `${this.uri}/${urlService}/${dato}`;
    
    return this.http.get<ResponseGeneric<Array<IUploadImages>>>(url,this.httpOptions)
      .pipe(
        map(this.getDatMapCortes),
        retry(2),
        catchError(this.handleError)
      );
  }
  public getDatMapCortes(datos: ResponseGeneric<Array<IUploadImages>>): ResponseGeneric<Array<IUploadImages>>{
    const datosResultado = datos.datos.map(mapp=>{
     
      const iUp: IUploadImages = {
        id: mapp.id,
        tipoCorte: mapp.tipoCorte,
        imagenes: mapp.imagenes.length > 0 ? mapp.imagenes.map(mapImg=>{
          
          const iUpImg: IImagen = mapImg;
          iUpImg.base64Imagen = `data:image/${mapImg.extencionImagen};base64,${mapImg.base64Imagen}`;
          return iUpImg;
        }) : []
      }
      return iUp;
    });
    datos.datos = datosResultado;
    return  datos;
  }


}
