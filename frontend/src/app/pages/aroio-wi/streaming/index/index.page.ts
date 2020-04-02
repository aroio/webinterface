import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-streaming-index-page',
  templateUrl: 'index.page.html'
})
export class AroioStreamingIndexPage {

  id = 'tab-streaming';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
