import {InputComponent} from '@braune-digital/form-utilities';
import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AroioInputComponent),
    multi: true
  }],
  selector: 'aroio-input',
  templateUrl: './aroio-input.component.html'
})
export class AroioInputComponent extends InputComponent implements ControlValueAccessor {

  get inputGroupClass(): string {
    if (this.prepend) {
      return this.options.classFormInputGroup + ' ' + this.options.classFormInputGroup + '--prepend';
    }
    if (this.append) {
      return this.options.classFormInputGroup + ' ' + this.options.classFormInputGroup + '--append';
    }
    return this.options.classFormInputGroup;
  }
}
