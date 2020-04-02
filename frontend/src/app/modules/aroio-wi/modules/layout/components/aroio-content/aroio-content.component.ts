import {Component, Input} from '@angular/core';

@Component({
  selector: 'aroio-content',
  templateUrl: 'aroio-content.component.html'
})
export class AroioContentComponent {
  @Input() centered = false;
}
