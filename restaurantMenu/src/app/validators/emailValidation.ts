import { FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function emailValidator(value: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let email = control.value;
        if(email === value){
            console.error("ten email jest zajęty");
            return control.value;
        };
        return null;
      }
    }