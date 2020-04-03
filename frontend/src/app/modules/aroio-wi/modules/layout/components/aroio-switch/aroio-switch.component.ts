import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aroio-switch',
  templateUrl: 'aroio-switch.component.html'
})
export class AroioSwitchComponent implements OnInit {

  @Input() id: string;
  @Input() value = true;
  @Input() checked = true;
  @Input() switchState = true;
  @Output() switched: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class') class = 'switch';

  ngOnInit(): void {
    this.switched.emit(this.switchState);
  }

}
