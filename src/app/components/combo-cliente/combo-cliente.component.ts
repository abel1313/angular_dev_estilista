import { IAutocomplete } from './../../dto/IAutocomplete';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ClaseEjemplo } from './ejemplo';


@Component({
  selector: 'app-combo-cliente',
  templateUrl: './combo-cliente.component.html',
  styleUrls: ['./combo-cliente.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ComboClienteComponent,
      multi: true
    }]
})
export class ComboClienteComponent implements OnInit, ControlValueAccessor  {
  @Output() respuestaCombo = new EventEmitter<IAutocomplete>();
  @Input() data: Array<IAutocomplete> = [];
  @Input() placeHolder: string = 'Seleccione ina opcion';
  @Input() label: string = '';
  completeAuto: IAutocomplete = {
    id:0,
    name: ''
  };
  keyword = 'name';

  nombreAuto: any;
  isDisabled = false;
  onChange = (_:any) => { }
  onTouch = () => { }

  value = '';

  constructor() { }

  ngOnInit(): void {


  }

  selectEvent(item: any) {
    // do something with selected item

    this.respuestaCombo.emit(item);
  }
  clearInput(event: any): void{
  }

  onInput(event: any ) {
    
    this.value = event.target.value;
    const valorBusqueda =  this.data.find(f=> f.name.toUpperCase() == this.value.toUpperCase() );
    if(valorBusqueda!){

      this.onTouch();
      this.onChange(this.value);
    }else{

  
    }



  }

  writeValue(obj: any): void {
    this.nombreAuto = obj || '';
 }
 registerOnChange(fn: any): void {
    this.onChange = fn;
 }
 registerOnTouched(fn: any): void {
    this.onTouch = fn;
 }
 setDisabledState?(isDisabled: boolean): void {
    console.log("setDisabledState ", isDisabled)
    this.isDisabled = isDisabled;
 }


 getValidDefault():  ValidatorFn | null {

  return (control: AbstractControl): { [key: string]: any } | null => {
    return null
  };
}
}


