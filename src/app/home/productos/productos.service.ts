import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';

import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
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
}
