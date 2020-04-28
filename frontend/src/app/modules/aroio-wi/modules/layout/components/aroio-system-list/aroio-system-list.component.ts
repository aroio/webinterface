import {Component, Input} from '@angular/core';

@Component({
  selector: 'aroio-system-list',
  templateUrl: 'aroio-system-list.component.html'
})
export class AroioSystemListComponent {

  @Input() title: string;
}
