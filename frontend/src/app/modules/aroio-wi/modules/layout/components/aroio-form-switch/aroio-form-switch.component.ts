import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animations} from '../../animations/animations';
import {FormControl} from '@angular/forms';

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
  @Input() inverted = false;
  @Input() switchState = false;
  @Input() disabled = false;
  @Output() switched: EventEmitter<boolean> = new EventEmitter<boolean>();

}
