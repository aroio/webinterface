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
  progress = 0;
  micPlugged = false;
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

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.widgetService.remove(Widgets['meassurement_links']);
  }

  enterStepAndSave(){
    switch (this.wizard.currentStep.stepId) {
      ///////////////
      // Startup
      ///////////////
      case this.stepNames[0]:
        this.widgetService.add(Widgets['meassurement_links']);
        this.socketClose();
        break;
      ///////////////
      // Begin with measurement routine and adjust microphone
      ///////////////
      case this.stepNames[1]:
        this.socketOpen();
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_01_BEGINN]);
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_02_MICROPHONE_ADJUSTMENT]);
        break;
      ///////////////
      // Start Meassurement
      ///////////////
      case this.stepNames[2]:
        this.socketSend(AroioCommands[MeassurementCommands.MESSUREMENT_03_START]);
        this.widgetService.remove(Widgets['meassurement_links']);
        break;
      ///////////////
      // meassurement progress
      ///////////////
      case this.stepNames[3]:
        this.socketSend(AroioCommands[MeassurementCommands.MESSUREMENT_04_RUNNING]);

        this._socketService.openProgress().subscribe( _ => {
          console.log(_);
          this._socketService.sendProgress(AroioCommands[MeassurementCommands.MESSUREMENT_04_RUNNING]);
        });

        break;
      ///////////////
      // creat filter
      ///////////////
      case this.stepNames[4]:
        this._socketService.closeProgress();
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_05_CREATE_FILTER]);
        break;
      ///////////////
      // save filter and finish
      ///////////////
      case this.stepNames[5]:
        this.socketSend(AroioCommands[MeassurementCommands.MEASUREMENT_06_SAVE_FILTER]);
        break;
    }
  }

  //////////////////////////////////////////////////
  // Fuctions for cpen and close Websocket to API

  socketSend(content: AroioCommandInterface) {
    this._socketService.send(content);
  }

  socketOpen() {
    this._socketService.open().subscribe( _ => {
      console.log(_);
      if (_["command"] === 'mic_plugged') {
        console.log('true');
        this.micPlugged = _.value as boolean;
      }
    })
  }

  socketClose() {
    this._socketService.close();
  }

}
