import {Component, HostBinding, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {registerLocaleData} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

import localeDE from '@angular/common/locales/de';
import localeDEextra from '@angular/common/locales/extra/de';
import localeEN from '@angular/common/locales/en';
import localeENextra from '@angular/common/locales/extra/en';
import {defineLocale, deLocale} from 'ngx-bootstrap/chronos';
import {AroioSettingsService} from './modules/core/services/aroio-settings.service';

registerLocaleData(localeDE, 'de', localeDEextra);
registerLocaleData(localeEN, 'en', localeENextra);


@Component({
  selector: 'aroio-wi-root',
  templateUrl: './aroio-wi.component.html'
})
export class AroioWiComponent implements OnInit{

  version = environment.version;
  currentTranslation = 'en';
  isLoading = false;


  @HostBinding('class') class = '';

  constructor(
    private translate: TranslateService,
    private settingsService: AroioSettingsService
  ) {
    this.isLoading = true;

    defineLocale('de', deLocale);
    this.translate.use(environment.defaultLocale).subscribe(() => {
      this.currentTranslation = this.translate.currentLang;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    // this.settingsService.getAroioSettings().subscribe(_ => {
    //   if (_.configuration.webinterface.dark_mode) {
    //     this.class = 'aroio-wi--dark';
    //   }
    // })
  }
}
