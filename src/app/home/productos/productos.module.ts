import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AddComponent } from './add/add.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitasModule } from '../citas/citas.module';
import { ComponentComponent } from './component/component.component';
import { UpdateComponent } from './update/update.component';
import { CoreModule } from 'src/app/core/core.module';
import { UpdateProductoComponent } from './update-producto/update-producto.component';


@NgModule({
  declarations: [
    AddComponent,
    BuscarComponent,
    MostrarComponent,
    ComponentComponent,
    UpdateComponent,
    UpdateProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    CitasModule,
    CoreModule
  ]
})
export class ProductosModule { }
