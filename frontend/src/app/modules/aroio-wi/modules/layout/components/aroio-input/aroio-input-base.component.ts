import {Component, Input} from '@angular/core';

@Component({
  selector: 'aroio-input-base',
  templateUrl: 'aroio-input-base.component.html',
})
export class AroioInputBaseComponent {

  @Input() id: string;
  @Input() label: string;
  @Input() hasContent = false;

  switchState = false;


  switched(event: any) {
    this.switchState = event;
  }

}
