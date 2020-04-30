import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import $ from 'jquery';


@Component({
  selector: '<aroio-support-component>',
  templateUrl: './support.component.html'
})
export class AroioSupportComponent implements OnInit{

  content: any;

  constructor(public location: Location){}


  ngOnInit(): void {
  }
}
