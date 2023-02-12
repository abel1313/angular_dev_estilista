
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {
    path: '', component: BuscarComponent
  },
  {
    path: 'agregar', component: AgregarComponent
  },
  {
    path: 'update/:id', component: UpdateComponent
  },
  {
    path: 'buscar', component: BuscarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CortesRoutingModule { }
