import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-network-index-page',
  templateUrl: 'index.page.html'
})
export class AroioNetworkIndexPage {

  id = 'tab-network';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
