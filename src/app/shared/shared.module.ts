import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class SharedModule { }
