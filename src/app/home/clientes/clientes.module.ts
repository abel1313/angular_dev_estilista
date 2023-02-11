import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const DIRECTIVAS = [
  AgregarClienteComponent
];
@NgModule({
  declarations: [
    DIRECTIVAS
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    
  ], exports:[
    DIRECTIVAS
  ]
})
export class ClientesModule { }
