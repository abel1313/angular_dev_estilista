import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { PickerComponent } from './picker/picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ComboClienteComponent } from './combo-cliente/combo-cliente.component';


const DIRECTIVAS =
[
  
  InputsComponent,
  PickerComponent,
  PedidosComponent,
  
  ComboClienteComponent,
];
@NgModule({
  declarations: [
    ...DIRECTIVAS
    
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    ReactiveFormsModule
    
  ],
  exports:[
    ...DIRECTIVAS
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
