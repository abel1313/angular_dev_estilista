import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  formCliente: UntypedFormGroup;
  constructor(private readonly fb: UntypedFormBuilder) { 

  }

  ngOnInit(): void {
    this.formCliente = this.fb.group({
      primer: ['',[Validators.required, Validators.maxLength(30)]],
    });

  }

  guardarCliente(): void{
      console.log(this.formCliente.value)
  }

}
