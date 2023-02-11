import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

const routes: Routes = [

  {
    path: 'mostrar', component: MostrarCarritoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
