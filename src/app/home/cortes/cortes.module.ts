import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CortesRoutingModule } from './cortes-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    MostrarComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CortesRoutingModule,
    SharedModule,
  ]
})
export class CortesModule { }
