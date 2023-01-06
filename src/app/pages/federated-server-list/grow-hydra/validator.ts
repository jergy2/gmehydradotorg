import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function validate(urlRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isDomain = urlRegExp.test(control.value);
        //returns null if valid.
        return !isDomain ? { url: { value: control.value } } : null;
    };
}
