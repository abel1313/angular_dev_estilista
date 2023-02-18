import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";



export class ValidatorImages{

    static validLengthImages(controlValue: number): ValidatorFn | null{
        console.log(controlValue);
        return (): { [key: string]: any } | null =>  
        controlValue > 0 
            ? null : { sinImagenes: true};
    }



}


