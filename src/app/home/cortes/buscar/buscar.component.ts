import { IResponseGeneric } from 'src/app/dto/IResponseGeneric';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { ICorte } from './../../../models/ICorte';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.sass']
})
export class BuscarComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  load: Boolean = false;
  subscription: Subscription;
  listaCortes: Array<ICorte> = [] ;
  constructor(
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly service: ServiceGenericoService
  ) {
    this.subscription = new Subscription();
   }

  ngOnInit(): void {
    this.getCortes();
  }


  private getCortes(): void{
    this.subscription.add(
      this.service.getData<IResponseGeneric<Array<ICorte>>>('cortes').subscribe((sucess: IResponseGeneric<Array<ICorte>>)=>{
        this.listaCortes = sucess.datos;
        console.log(sucess)
      }, (error: any)=>console.log)
    );
  }

}
