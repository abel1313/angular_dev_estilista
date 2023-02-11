import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horaAMPM'
})
export class HoraAMPMPipe implements PipeTransform {

  transform(value: string): string {
    const hora = Number(value);
    if( hora > 0 && hora < 12){
      return `AM`
    }
    if(hora > 11 && hora < 24){
      return `PM`;
    }
    return '';
  }

}
