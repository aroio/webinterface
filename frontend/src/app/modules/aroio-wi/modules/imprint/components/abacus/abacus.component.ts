import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: '<aroio-abacus-component>',
  templateUrl: './abacus.component.html'
})
export class AroioAbacusComponent {

  constructor(public location: Location){}

}
