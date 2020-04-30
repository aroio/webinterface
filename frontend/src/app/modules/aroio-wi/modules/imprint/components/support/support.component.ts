import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: '<aroio-support-component>',
  templateUrl: './support.component.html'
})
export class AroioSupportComponent {

  constructor(public location: Location){}

}
