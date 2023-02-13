import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './dragDrop.directive';



@NgModule({
  declarations: [
    DragDirective
  ],
  imports: [
    CommonModule
  ],exports:[
    DragDirective
  ]
})
export class CoreModule { }
