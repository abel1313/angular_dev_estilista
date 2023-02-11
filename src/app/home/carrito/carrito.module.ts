import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitasModule } from '../citas/citas.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MostrarCarritoComponent

  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    SharedModule,
    CitasModule,
    
  ]
})
export class CarritoModule { }
