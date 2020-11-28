import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {DOCUMENT, registerLocaleData} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

import localeDE from '@angular/common/locales/de';
import localeDEextra from '@angular/common/locales/extra/de';
import localeEN from '@angular/common/locales/en';
import localeENextra from '@angular/common/locales/extra/en';
import {defineLocale, deLocale} from 'ngx-bootstrap/chronos';
import {AroioSettingsService} from './modules/core/services/aroio-settings.service';
import {TooltipConfig} from 'ngx-bootstrap/tooltip';
import {SidebarWidgetsService} from './modules/core/services/sidebar-widgets.service';
import {Widgets} from './utils/configs/widgets';

registerLocaleData(localeDE, 'de', localeDEextra);
registerLocaleData(localeEN, 'en', localeENextra);


@Component({
  selector: 'aroio-wi-root',
  templateUrl: './aroio-wi.component.html',
  providers: [TooltipConfig]
})
export class AroioWiComponent implements OnInit {

  version = environment.version;
  currentTranslation = 'en';
  isLoading = false;


  @HostBinding('class') class = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
    private settingsService: AroioSettingsService,
    private tooltipConfig: TooltipConfig,
    private widgetService: SidebarWidgetsService
  ) {
    this.isLoading = true;

    this.widgetService.add(Widgets['system_info']);

    tooltipConfig.container = 'body';
    tooltipConfig.placement = 'top';

    defineLocale('de', deLocale);
    this.translate.use(environment.defaultLocale).subscribe(() => {
      this.currentTranslation = this.translate.currentLang;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.settingsService.getAroioSettings().subscribe(_ => {
      if (_.configuration.webinterface.dark_mode) {
        document.getElementById('aroio-wi').classList.add('aroio-wi--dark')
      } else {
        document.getElementById('aroio-wi').classList.remove('aroio-wi--dark')
      }
    })
  }
}
