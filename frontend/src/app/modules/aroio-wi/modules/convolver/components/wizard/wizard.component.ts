import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Animations} from '../../../layout/animations/animations';
import {MeassurementSocketService} from '../../../../../core/services/meassurement-socket.service';
import {WizardComponent, WizardStepComponent} from 'angular-archwizard';
import {WIZARD_STEPS} from '../../../../../../utils/configs/wizard-steps';
import {SidebarWidgetsService} from '../../../../../core/services/sidebar-widgets.service';
import {Widgets} from '../../../../../../utils/configs/widgets';
import {AroioCommandInterface} from '../../../../../core/interfaces/command.interface';
import {AroioCommands, MeassurementCommands} from '../../../../../../utils/configs/commands';


@Component({
  selector: '<aroio-convolver-wizard-component>',
  templateUrl: './wizard.component.html',
  animations: [
    Animations.fadeHeightInOut,
  ]
})
export class ConvolverWizardComponent implements OnInit, AfterViewInit, OnDestroy {

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

  @ViewChildren(WizardStepComponent)
  public wizardSteps: QueryList<WizardStepComponent>;

  constructor(
    private  _api: HttpClient,
    private _socketService: MeassurementSocketService,
    private widgetService: SidebarWidgetsService
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

  ngAfterViewInit(): void {
    console.log(this.wizard);
  }

  ngOnDestroy(): void {
    this.widgetService.remove(Widgets['meassurement_links']);
  }

  enterStepAndSave(){
    switch (this.wizard.currentStep.stepId) {
      case this.stepNames[0]:
        this.widgetService.add(Widgets['meassurement_links']);
        this.socketClose();
        break;
      case this.stepNames[1]:
        this.socketOpen();
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_01_BEGINN]);
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_02_MICROPHONE_ADJUSTMENT]);
        console.log(this.stepNames[1], 'Socket connection openend');
        break;
      case this.stepNames[2]:
        this.socketSend(AroioCommands[MeassurementCommands.MESSUREMENT_03_START]);
        this.widgetService.remove(Widgets['meassurement_links']);
        console.log(this.stepNames[2]);
        break;
      case this.stepNames[3]:
        this.socketSend(AroioCommands[MeassurementCommands.MESSUREMENT_04_RUNNING]);
        console.log(this.stepNames[3]);
        break;
      case this.stepNames[4]:
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_05_CREATE_FILTER]);
        console.log(this.stepNames[4]);
        break;
      case this.stepNames[5]:
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_06_SAVE_FILTER]);
        console.log(this.stepNames[5]);
        break;
    }
  }

  //////////////////////////////////////////////////
  // Fuctions for cpen and close Websocket to API

  socketSend(content: AroioCommandInterface) {
    console.log(content);
    this._socketService.send(content);
  }

  socketOpen() {
    this._socketService.open().subscribe( _ => {
      console.log(_);
    })
  }

  socketClose() {
    this._socketService.close();
  }

}
