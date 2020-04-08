import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: '<aroio-network-index-component>',
  templateUrl: './index.component.html'
})
export class NetworkIndexComponent implements OnInit {


  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      hostname: new FormControl('', Validators.required),
      ip: new FormControl(''),
      gateway: new FormControl(''),
      subnet: new FormControl(''),
      password: new FormControl(''),
      platform: new FormControl(''),
    });
  }

  doThonething() {
    console.log('switch switched');
  }
}
