import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';

const routes: Routes = [
  {
    path: '', component: BuscarComponent
  },
  {
    path: 'agregar', component: AddComponent
  },
  {
    path: 'actualizar', component: UpdateComponent
  },
  {
    path: 'actualizar/:id', component: UpdateProductoComponent
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
