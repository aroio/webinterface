import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() switched: EventEmitter<boolean> = new EventEmitter<boolean>();
  switchState = true;

}
