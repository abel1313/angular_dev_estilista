import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservar-pedido',
  templateUrl: './reservar-pedido.component.html',
  styleUrls: ['./reservar-pedido.component.sass']
})
export class ReservarPedidoComponent implements OnInit {
  formReservar: FormGroup;
  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formReservar = this.fb.group(
      {
        cliente: ['', [Validators.required]],
        fechaCliente: [new Date(), [Validators.required]],
        horaSeleccionada: ['', [Validators.required]],
        minutoSeleccionado: ['', [Validators.required]],
      }
    );
  }

}
