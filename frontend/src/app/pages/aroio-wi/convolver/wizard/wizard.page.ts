import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../modules/core/services/navigation.service';

@Component({
  selector: 'aroio-convolver-wizard-page',
  templateUrl: 'wizard.page.html'
})
export class AroioConvolverWizardPage {

  id = 'tab-convolver';

  constructor(private navigationService: NavigationService) {
    this.navigationService.$activeTab.next(this.id);
  }
}
