import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true
    }
  ]
})
export class InputsComponent implements OnInit, ControlValueAccessor {
  @Input() myLabel: string = '';
  @Input() placeholder: string = '';
  @Input() etiqueta: string = '';
  @Input() id: string = '';
  @Input() arial: string = '';
  counter = 0;
  value = '';
  isDisabled = false;
  onChange = (_:any) => { }
  onTouch = () => { }

  constructor() { }

  ngOnInit(): void {


  }

  onInput(event: any ) {
    
    this.counter = event.target.value.length;
    this.value = event.target.value;
    this.onTouch();
    this.onChange(this.value);


  }

  writeValue(value: any): void {
    

    if (value) {
      this.value = value || '';
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }



}
