import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';

const routes: Routes = [
  {
    path: '', component: BuscarComponent
  },
  {
    path: 'agregar', component: AddComponent
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
export class ProductosRoutingModule { }
