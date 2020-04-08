import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../../../../../core/services/navigation.service';
import {Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'aroio-sidebar',
  templateUrl: 'aroio-sidebar.component.html'
})
export class AroioSidebarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  activeTab: string;

  constructor(
    private navigationService: NavigationService,
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.navigationService.$activeTab.subscribe(_ => {
      this.activeTab = _;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
