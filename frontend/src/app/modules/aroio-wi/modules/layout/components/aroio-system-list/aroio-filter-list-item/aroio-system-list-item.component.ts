import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aroio-system-list-item',
  templateUrl: 'aroio-system-list-item.component.html'
})
export class AroioSystemListItemComponent {
  @HostBinding('class') class = 'aroio-system-list__item';
}
