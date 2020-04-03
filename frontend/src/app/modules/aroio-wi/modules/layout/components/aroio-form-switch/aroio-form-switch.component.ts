import {Component, Input} from '@angular/core';
import {Animations} from '../../animations/animations';

@Component({
  selector: 'aroio-form-switch',
  templateUrl: 'aroio-form-switch.component.html',
  animations: [
    Animations.fadeHeightInOut,
  ]
})
export class AroioFormSwitchComponent {

  @Input() id: string;
  @Input() label: string;
  @Input() hasContent = false;

  switchState = false;


  switched(event: any) {
    this.switchState = event;
  }

}
