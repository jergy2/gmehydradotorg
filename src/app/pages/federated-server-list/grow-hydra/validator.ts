import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function validate(testAgainstExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const test = testAgainstExp.test(control.value);
        //returns null if valid.
        if(test){
            return null;
        }else{
            return { value: control.value }
        }
    };
}
