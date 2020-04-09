import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'aroio-filter-list-item',
  templateUrl: 'aroio-filter-list-item.component.html'
})
export class AroioFilterListItemComponent {

  @HostBinding('class') class = 'aroio-filter-list__item';
  id = Math.random().toString(36).substring(7);

}
