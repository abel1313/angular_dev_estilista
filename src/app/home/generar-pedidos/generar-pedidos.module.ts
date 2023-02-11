import { PipeModule } from './../../pipes/pipe.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarPedidosRoutingModule } from './generar-pedidos-routing.module';
import { PedidoComponent } from './pedido/pedido.component';
import { ReservarPedidoComponent } from './reservar-pedido/reservar-pedido.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


const COMPONENT = [
  PedidoComponent,
ReservarPedidoComponent
];
@NgModule({
  declarations: [
    COMPONENT
  ],
  imports: [
    GenerarPedidosRoutingModule,
    ComponentsModule,
    SharedModule,
    AutocompleteLibModule,
    AngularMaterialModule,
    PipeModule

  ],
  exports:[
    COMPONENT
  ]
})
export class GenerarPedidosModule { }
