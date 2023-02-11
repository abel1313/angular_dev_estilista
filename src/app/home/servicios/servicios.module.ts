import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { MostrarServiciosComponent } from './mostrar-servicios/mostrar-servicios.component';

@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    MostrarServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    
  ]
})
export class ServiciosModule { }
