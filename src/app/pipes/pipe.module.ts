import { HoraAMPMPipe } from './hora-ampm.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const PIPES = [
  HoraAMPMPipe
];


@NgModule({
  declarations: [
    PIPES
  ],
  exports:[
    PIPES
  ]
})
export class PipeModule { }
