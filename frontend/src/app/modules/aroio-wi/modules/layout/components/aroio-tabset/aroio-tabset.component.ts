import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../../../../../core/services/navigation.service';
import {AroioTabs} from '../../../../../../utils/aroio-tabs';
import {Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'aroio-tabset',
  templateUrl: 'aroio-tabset.component.html'
})
export class AroioTabsetComponent implements OnInit, OnDestroy {

  aroioTabs = AroioTabs;

  subscription: Subscription;

  @Input() activeTab: string;

  constructor(
    private navigationService: NavigationService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {

    this.subscription = this.navigationService.$activeTab.subscribe(_ => {
      this.activeTab = _;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
