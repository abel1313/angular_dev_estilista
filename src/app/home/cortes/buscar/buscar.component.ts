import { IResponseGeneric, ResponseGeneric } from 'src/app/dto/IResponseGeneric';
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { ICorte } from './../../../models/ICorte';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { IUploadImages } from 'src/app/models';
import { CortesService } from 'src/app/service/cortes.service';

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

  listaOtros: ResponseGeneric<Array<IUploadImages>> = {
    code: '',
    codeValue: 404,
    mensaje:'',
    datos:[]
  };

  constructor(
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly service: CortesService
  ) {
    this.subscription = new Subscription();
   }

  ngOnInit(): void {
    this.getCortes();
    this.getCortesById();
  }


  private getCortes(): void{
    this.subscription.add(
      this.service.getData<IResponseGeneric<Array<ICorte>>>('cortes').subscribe((sucess: IResponseGeneric<Array<ICorte>>)=>{
        this.listaCortes = sucess.datos;
        console.log(sucess)
      }, (error: any)=>console.log)
    );
  }

  private getCortesById(): void{
    const id = 4;
    const page = 0;
    const size = 4;
    const urlConcat = `${page}/${size}`;
    this.subscription.add(
      this.service.getAllCortes(`cortes/getAllPage`,urlConcat).subscribe((sucess: ResponseGeneric<Array<IUploadImages>>)=>{
        
        console.log(sucess,' by ');
        this.listaOtros = sucess;
      }, (error: any)=>console.log)
    );
  }

}
