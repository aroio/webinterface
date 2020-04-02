import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-audio-index-page',
  templateUrl: 'index.page.html'
})
export class AroioAudioIndexPage {

  id = 'tab-audio';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
