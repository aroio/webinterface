import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Animations} from '../../../layout/animations/animations';

@Component({
  selector: '<aroio-convolver-wizard-component>',
  templateUrl: './wizard.component.html',
  animations: [
    Animations.fadeHeightInOut,
  ]
})
export class ConvolverWizardComponent implements OnInit {

  form: FormGroup;
  convolutionEnabled = true;

  constructor(
    private  _api: HttpClient,
  ) {
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
}
