import {Component, OnInit, TemplateRef} from '@angular/core';
import UserInterface from '../../../../../../models/interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: '<aroio-network-index-component>',
  templateUrl: './index.component.html'
})
export class NetworkIndexComponent implements OnInit {


  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  doThonething(){
    console.log('switch switched');
  }
}
