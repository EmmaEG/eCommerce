import { AbstractControl } from '@angular/forms';

export class MyValidators {

    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value < 10) {
            return {price_invalid: true};
        }
        return null;
    }
}
