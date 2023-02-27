import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class ClaseEjemplo {

    static creatDateRangeValidator(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
                return {dateRange:true};
    
        }
    }
}