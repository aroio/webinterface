import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: '<aroio-imprint-component>',
  templateUrl: './imprint.component.html'
})
export class AroioImprintComponent {

  constructor(public location: Location){}

}
