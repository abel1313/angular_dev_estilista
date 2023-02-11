import { GenerarPedidosModule } from './../generar-pedidos/generar-pedidos.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { GenerarCitaComponent } from './generar-cita/generar-cita.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    GenerarCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ComponentsModule,
    GenerarPedidosModule,
  ],
  exports:[
    GenerarCitaComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CitasModule { }
