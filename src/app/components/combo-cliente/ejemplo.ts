import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class ClaseEjemplo {

    static creatDateRangeValidator(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {

            console.log(control, ' c ');
                return {dateRange:true};
    
        }
    }
}