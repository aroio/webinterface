import {Component, Input} from '@angular/core';

@Component({
  selector: 'aroio-content-group',
  templateUrl: 'aroio-content-group.component.html'
})
export class AroioContentGroupComponent {
  @Input() centered = false;
}
