import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-system-index-page',
  templateUrl: 'index.page.html'
})
export class AroioSystemIndexPage {

  id = 'tab-system';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
