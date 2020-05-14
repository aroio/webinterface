import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../../../../../core/services/navigation.service';
import {Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {SidebarWidgetsService} from '../../../../../core/services/sidebar-widgets.service';
import {Animations} from '../../animations/animations';

@Component({
  selector: 'aroio-sidebar',
  templateUrl: 'aroio-sidebar.component.html',
  animations: [
    Animations.slideRightOut,
  ]
})
export class AroioSidebarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  activeTab: string;

  constructor(
    private navigationService: NavigationService,
    public translate: TranslateService,
    public widgetService: SidebarWidgetsService
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
