import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Animations} from '../../../layout/animations/animations';
import {MeassurementSocketService} from '../../../../../core/services/meassurement-socket.service';
import {WizardComponent} from 'angular-archwizard';
import {WIZARD_STEPS} from '../../../../../../utils/configs/wizard-steps';


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
  stepNames = [
    WIZARD_STEPS.STARTUP,
    WIZARD_STEPS.POSITIONING,
    WIZARD_STEPS.MEASSUREMENT_START,
    WIZARD_STEPS.MEASSUREMENT_RUNNING,
    WIZARD_STEPS.FILTER,
    WIZARD_STEPS.FINISH
  ];

  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  constructor(
    private  _api: HttpClient,
    private _socketService: MeassurementSocketService
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

  send(content) {
    this._socketService.send({message: 'test'});
  }

  open() {
    this._socketService.open().subscribe( _ => {
      console.log(_);
    })
  }

  close() {
    this._socketService.close();
  }

}
