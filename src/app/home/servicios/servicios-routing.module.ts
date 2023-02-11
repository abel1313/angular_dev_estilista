import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';

import { MostrarServiciosComponent } from './mostrar-servicios/mostrar-servicios.component';

const routes: Routes = [
  {
    path: '', component: MostrarServiciosComponent
  },
  {
    path: 'mostrar', component: MostrarServiciosComponent
  },
  {
    path: 'agregar', component: AgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
