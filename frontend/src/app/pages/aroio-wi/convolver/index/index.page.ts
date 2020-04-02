import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-convolver-index-page',
  templateUrl: 'index.page.html'
})
export class AroioConvolverIndexPage {

  id = 'tab-convolver';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
