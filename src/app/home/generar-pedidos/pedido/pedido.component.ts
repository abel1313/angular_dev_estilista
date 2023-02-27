import { PipeGeneric } from './../../../models/IPipeGeneric';
import { IAutocomplete } from './../../../dto/IAutocomplete';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClaseEjemplo } from 'src/app/components/combo-cliente/ejemplo';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent implements OnInit {

  formPedido: FormGroup;
  data: Array<IAutocomplete> = [];

  minDate: Date;
  maxDate: Date;
  horaCompleta: string = '';
  minutos: string = '';
  fechaCompleta: string ='';

  constructor(
    private readonly fb: FormBuilder
  ) {

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 5);

  }
  ngOnInit(): void {
    this.formPedido = this.fb.group(
      {
        cliente: ['', [Validators.required]],
        fechaCliente: [new Date(), [Validators.required]],
        horaSeleccionada: ['', [Validators.required]],
        minutoSeleccionado: ['', [Validators.required]],
      }
    );

    this.data = [
      {
        id: 1,
        name: 'somos 1'
      },
      {
        id: 2,
        name: 'Somos 2'
      },
      {
        id: 3,
        name: 'Somoos 3'
      }
    ];
  }



  guardarPedido(): void {
  }


  cancelarOpcion(cancelar: any): void {

    cancelar.preventDefault();

  }


  selectEvent(item: any) {
    // do something with selected item


  }
  clearInput(event: any): void {
  }

  onInput(event: any) {

    const value = event.target.value;
    const valorBusqueda = this.data.find(f => f.name.toUpperCase() == value.toUpperCase());
    if (valorBusqueda!) {


    } else {

      this.formPedido.setValidators(this.creatDateRangeValidator);
      this.formPedido.updateValueAndValidity();
      this.formPedido.clearValidators();




    }
    const datos = this.formPedido.errors?.['clienteNoExiste'];


  }

  creatDateRangeValidator(control: AbstractControl): ValidationErrors | null {


    return { clienteNoExiste: true };


  }

  keyUpHora(valor: string): void {

     let value: string  = this.formPedido.get('horaSeleccionada')?.value;
     const nuevoValor = value.replace(/[^0-9]/g,'');
     this.formPedido.get('horaSeleccionada')?.setValue(nuevoValor);
    
    

    if(valor!== '' ){
      this.horaCompleta = valor;
      this.fechaCompleta = `${PipeGeneric.convertFecha(this.horaCompleta)}:${this.minutos !== '' ? this.minutos : '00' }`;
    }else{
      this.horaCompleta = '';
      this.minutos = '';
    }
  }
  keyUpMinuto(valor: string): void {
    let value: string  = this.formPedido.get('minutoSeleccionado')?.value;
    const nuevoValor = value.replace(/[^0-9]/g,'');
    this.formPedido.get('minutoSeleccionado')?.setValue(nuevoValor);
      this.fechaCompleta = `${PipeGeneric.convertFecha(this.horaCompleta)}:${PipeGeneric.convertFecha(valor)}`;

  }
}
