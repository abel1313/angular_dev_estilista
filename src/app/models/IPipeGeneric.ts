

export class PipeGeneric{

    static convertFecha(valor: string): string{
        const numero = Number(valor);
        if( isNaN(numero) ){
            return '00';
        }
        if(numero >= 0 && numero < 10){
            return `0${numero}`;
        }
        if(valor == ''){
            return '00';
        }
        return  valor;
    }

}